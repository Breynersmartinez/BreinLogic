import { useState, useRef, useEffect } from 'react';
import { Send, Menu, FileText } from 'lucide-react';
import Header from './Header';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import FileUpload from './FileUpload';
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
  const [showFileUpload, setShowFileUpload] = useState(false);
  const messageEndRef = useRef(null);
  
  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleFileContent = (content, fileName, fileType) => {
    // Añadir mensaje del sistema explicando el archivo cargado
    const systemMessage = {
      role: 'system',
      content: `El usuario ha cargado un archivo: ${fileName} (${fileType})`
    };
    
    // Añadir el contenido del archivo como mensaje del usuario
    const fileMessage = {
      role: 'user',
      content: `Por favor, analiza este contenido del archivo ${fileName}:\n\n${content}`
    };
    
    setMessages(prev => [...prev, systemMessage, fileMessage]);
    setShowFileUpload(false);
    
    // Procesar automáticamente la solicitud
    processApiRequest(fileMessage.content);
  };

  const processApiRequest = async (messageText) => {
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
              parts: [{ text: messageText }]
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
      setError('Error conectando con BreinLogic. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = {
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    processApiRequest(input);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header 
        showSidebar={showSidebar} 
        setShowSidebar={setShowSidebar} 
      />
      
      <main className="flex-1 overflow-y-auto p-4 bg-gray-900">
        {showFileUpload && (
          <div className="max-w-3xl mx-auto mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium flex items-center">
                  <FileText size={18} className="mr-2 text-blue-400" />
                  Subir documento para análisis
                </h3>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowFileUpload(false)}
                >
                  &times;
                </button>
              </div>
              <FileUpload 
                onFileContent={handleFileContent}
                setError={setError}
              />
            </div>
          </div>
        )}
        
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
        showFileUpload={showFileUpload}
        setShowFileUpload={setShowFileUpload}
      />
    </div>
  );
}