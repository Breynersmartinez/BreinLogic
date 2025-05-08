import { Menu } from 'lucide-react';

export default function Header({ showSidebar, setShowSidebar }) {
  return (
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
  );
}