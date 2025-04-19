import { useState, useRef, useEffect } from 'react';
import { Send, Menu } from 'lucide-react';
import Header from './Header';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { API_URL } from '../config/api';

export default function ChatInterface({ 
  messages, 
  setMessages, 
  showSidebar, 
  setShowSidebar, 
  error, 
  setError,
  clearConversation
}) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header 
        showSidebar={showSidebar} 
        setShowSidebar={setShowSidebar} 
      />
      
      <main className="flex-1 overflow-y-auto p-4 bg-gray-900">
        <MessageList 
          messages={messages} 
          isLoading={isLoading} 
          error={error} 
          messageEndRef={messageEndRef} 
        />
      </main>
      
      <ChatInput 
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </div>
  );
}