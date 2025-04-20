// src/components/ChatInterface.jsx
import { useState, useRef, useEffect } from 'react';
import { Send, Menu, FileText } from 'lucide-react';
import Header from './Header';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import FileUpload from './FileUpload';
import DocumentManager from './DocumentManager';
import { API_URL } from '../config/api';
import { useDocuments } from '../context/DocumentContext';

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
  const { activeDocument, getActiveDocumentContent } = useDocuments();
  
  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Manejador cuando se procesa un archivo
  const handleFileProcessed = (summary, docId) => {
    // Añadir el mensaje del sistema informando sobre el documento cargado
    const systemMessage = {
      role: 'system',
      content: `Documento cargado con ID: ${docId}`
    };
    
    // Añadir el mensaje con el resumen para el usuario
    const summaryMessage = {
      role: 'assistant',
      content: summary
    };
    
    setMessages(prev => [...prev, systemMessage, summaryMessage]);
    setShowFileUpload(false);
  };

  // Procesar la solicitud API incluyendo el contexto del documento activo
  const processApiRequest = async (messageText) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Obtener el contenido del documento activo (si existe)
      const documentContent = getActiveDocumentContent();
      
      // Preparar el mensaje con contexto si hay un documento activo
      let contextualizedMessage = messageText;
      
      if (documentContent && activeDocument) {
        contextualizedMessage = `
[Consulta sobre el documento: ${activeDocument.metadata.filename}]

${messageText}

[Contenido del documento para referencia:]
${documentContent.substring(0, 4000)}${documentContent.length > 4000 ? '...' : ''}
`;
      }
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: contextualizedMessage }]
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
                onFileProcessed={handleFileProcessed}
                setError={setError}
              />
            </div>
          </div>
        )}
        
        <div className="max-w-3xl mx-auto">
          <DocumentManager />
          
          {activeDocument && (
            <div className="mb-4 bg-blue-900/20 p-3 rounded-lg text-sm border border-blue-800/50">
              <p className="flex items-center text-blue-300">
                <FileText size={16} className="mr-2" />
                <span>
                  Contexto activo: <strong>{activeDocument.metadata.filename}</strong>
                </span>
              </p>
            </div>
          )}
          
          <MessageList 
            messages={messages} 
            isLoading={isLoading} 
            error={error} 
            messageEndRef={messageEndRef} 
          />
        </div>
      </main>
      
      <ChatInput 
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        showFileUpload={showFileUpload}
        setShowFileUpload={setShowFileUpload}
        hasActiveDocument={!!activeDocument}
      />
    </div>
  );
}