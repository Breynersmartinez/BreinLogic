import { Send } from 'lucide-react';

export default function ChatInput({ input, setInput, sendMessage }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
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
  );
}
