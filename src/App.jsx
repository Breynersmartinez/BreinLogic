import { useState, useRef, useEffect } from 'react';
import { Send, ChevronDown, Menu, Trash2, User, Bot } from 'lucide-react';

// API configuration
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;


// Markdown renderer function to convert markdown to HTML
const renderMarkdown = (text) => {
  // Simple markdown parsing (for a full solution, you would use a library)
  let html = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .split('\n').join('<br/>');
    
  return { __html: html };
};

export default function BreinLogic() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const messageEndRef = useRef(null);
  
  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = {
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: input }]
            }
          ]
        })
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      
      const botMessage = {
        role: 'assistant',
        content: data.candidates[0].content.parts[0].text
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Error calling API:', err);
      setError('Error connecting to BreinLogic. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearConversation = () => {
    setMessages([]);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      {showSidebar && (
        <div className="w-64 bg-gray-800 p-4 flex flex-col">
          <div className="mb-4">
            <button 
              className="flex items-center justify-center w-full p-3 rounded-md bg-blue-600 hover:bg-blue-700"
              onClick={clearConversation}
            >
              <span>New Chat</span>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="text-sm text-gray-400 mb-2">Today</div>
            <button className="flex items-center p-3 w-full text-left rounded-md hover:bg-gray-700 text-sm">
              <span className="truncate">Welcome to BreinLogic</span>
            </button>
          </div>
          
          <div className="mt-auto">
            <button 
              className="flex items-center p-3 w-full text-left rounded-md hover:bg-gray-700 text-sm"
              onClick={clearConversation}
            >
              <Trash2 size={16} className="mr-2" />
              <span>Clear conversations</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b border-gray-700 p-4 flex items-center">
          <button 
            className="p-2 rounded hover:bg-gray-700 mr-2"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Menu size={20} />
          </button>
          <h1 className="text-xl font-semibold flex-1 text-center text-blue-400">BreinLogic</h1>
          <div className="w-10"></div> {/* For balance */}
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 bg-gray-900">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-blue-500 mb-4">BreinLogic</div>
              <div className="text-xl text-gray-400">How can I help you today?</div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-6 ${msg.role === 'user' ? '' : 'bg-gray-800 rounded-lg p-4'}`}>
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full mr-3 ${msg.role === 'user' ? 'bg-gray-700' : 'bg-blue-600'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1">
                        {msg.role === 'user' ? 'You' : 'BreinLogic'}
                      </div>
                      <div 
                        dangerouslySetInnerHTML={renderMarkdown(msg.content)}
                        className="text-gray-300 leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="mb-6 bg-gray-800 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full mr-3 bg-blue-600">
                      <Bot size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1">BreinLogic</div>
                      <div className="text-gray-300">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="mb-6 bg-red-900/50 text-red-300 rounded-lg p-4">
                  {error}
                </div>
              )}
              <div ref={messageEndRef} />
            </div>
          )}
        </main>
        
        <footer className="border-t border-gray-700 p-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-end bg-gray-800 rounded-lg border border-gray-700">
              <textarea
                rows="1"
                placeholder="Message BreinLogic..."
                className="flex-1 bg-transparent p-3 resize-none focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button 
                className={`p-3 rounded-r-lg ${input.trim() ? 'text-blue-400 hover:text-blue-300' : 'text-gray-500'}`}
                onClick={sendMessage}
                disabled={!input.trim()}
              >
                <Send size={20} />
              </button>
            </div>
            <div className="text-xs text-center mt-2 text-gray-500">
              BreinLogic can make mistakes. Verify important information.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}