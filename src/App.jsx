// src/App.jsx
import { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import Sidebar from './components/Sidebar';
import { DocumentProvider } from './context/DocumentContext';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [error, setError] = useState(null);

  const clearConversation = () => {
    setMessages([]);
  };

  return (
    <DocumentProvider>
      <div className="flex h-screen bg-gray-900 text-gray-100">
        {/* Sidebar */}
        {showSidebar && (
          <Sidebar 
            clearConversation={clearConversation} 
          />
        )}
        
        {/* Main content */}
        <ChatInterface 
          messages={messages}
          setMessages={setMessages}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          error={error}
          setError={setError}
          clearConversation={clearConversation}
        />
      </div>
    </DocumentProvider>
  );
}