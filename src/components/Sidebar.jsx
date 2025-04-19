import { Trash2 } from 'lucide-react';

export default function Sidebar({ clearConversation }) {
  return (
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
  );
}