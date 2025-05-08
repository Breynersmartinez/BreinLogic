import { User, Bot } from 'lucide-react';
import { renderMarkdown } from '../utils/markdown';

export default function Message({ message }) {
  const { role, content } = message;
  
  return (
    <div className={`mb-6 ${role === 'user' ? '' : 'bg-gray-800 rounded-lg p-4'}`}>
      <div className="flex items-start">
        <div className={`p-2 rounded-full mr-3 ${role === 'user' ? 'bg-gray-700' : 'bg-blue-600'}`}>
          {role === 'user' ? <User size={16} /> : <Bot size={16} />}
        </div>
        <div className="flex-1">
          <div className="font-medium mb-1">
            {role === 'user' ? 'You' : 'BreinLogic'}
          </div>
          <div 
            dangerouslySetInnerHTML={renderMarkdown(content)}
            className="text-gray-300 leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
}