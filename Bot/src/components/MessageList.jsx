import { User, Bot } from 'lucide-react';
import Message from './Message';
import EmptyChat from './EmptyChat';

export default function MessageList({ messages, isLoading, error, messageEndRef }) {
  return (
    <>
      {messages.length === 0 ? (
        <EmptyChat />
      ) : (
        <div className="max-w-3xl mx-auto">
          {messages.map((msg, index) => (
            <Message key={index} message={msg} />
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
    </>
  );
}
