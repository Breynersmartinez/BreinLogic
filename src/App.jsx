// src/App.jsx
import { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import Sidebar from './components/Sidebar';
import { DocumentProvider } from './context/DocumentContext';
import HomePage from './components/HomePage';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [error, setError] = useState(null);
  const [showHome, setShowHome] = useState(true); // 👈 para controlar si mostrar homepage o chat

  const clearConversation = () => {
    setMessages([]);
  };

  const handleStartChat = (prompt) => {
    setShowHome(false); // 👈 ocultar homepage y mostrar chat
    if (prompt) {
      setMessages([{ role: "user", content: prompt }]);
    }
  };

  return (
    <DocumentProvider>
      <div className="flex h-screen bg-gray-900 text-gray-100">
        {showHome ? (
          <HomePage 
            onStartChat={handleStartChat} 
            messages={messages} 
          />
        ) : (
          <>
            {showSidebar && (
              <Sidebar clearConversation={clearConversation} />
            )}
            <ChatInterface
              messages={messages}
              setMessages={setMessages}
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
              error={error}
              setError={setError}
              clearConversation={clearConversation}
            />
          </>
        )}
      </div>
    </DocumentProvider>
  );
}
