// src/components/ChatInput.jsx
import { Send, FileUp, X } from 'lucide-react';

export default function ChatInput({ 
  input, 
  setInput, 
  sendMessage, 
  showFileUpload, 
  setShowFileUpload 
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleFileUpload = () => {
    setShowFileUpload(!showFileUpload);
  };

  return (
    <footer className="border-t border-gray-700 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-end bg-gray-800 rounded-lg border border-gray-700">
          <button 
            className={`p-3 ${showFileUpload ? 'text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}
            onClick={toggleFileUpload}
            title={showFileUpload ? "Cancelar subida" : "Subir documento"}
          >
            {showFileUpload ? <X size={20} /> : <FileUp size={20} />}
          </button>
          
          <textarea
            rows="1"
            placeholder="Mensaje a BreinLogic..."
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
          BreinLogic puede cometer errores. Verifica la información importante.
        </div>
      </div>
    </footer>
  );
}