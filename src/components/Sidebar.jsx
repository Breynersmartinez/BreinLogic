// src/components/Sidebar.jsx
import { Trash2, FileText, Plus } from 'lucide-react';
import { useDocuments } from '../context/DocumentContext';

export default function Sidebar({ clearConversation }) {
  const { loadedDocuments, switchActiveDocument, activeDocument } = useDocuments();

  return (
    <div className="w-64 bg-gray-800 p-4 flex flex-col">
      <div className="mb-4">
        <button 
          className="flex items-center justify-center w-full p-3 rounded-md bg-blue-600 hover:bg-blue-700"
          onClick={clearConversation}
        >
          <span>Nuevo Chat</span>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="text-sm text-gray-400 mb-2">Hoy</div>
        <button className="flex items-center p-3 w-full text-left rounded-md hover:bg-gray-700 text-sm">
          <span className="truncate">Bienvenido a BreinLogic</span>
        </button>
        
        {/* Sección de documentos */}
        {loadedDocuments.length > 0 && (
          <div className="mt-6">
            <div className="text-sm text-gray-400 mb-2 flex items-center justify-between">
              <span>Documentos</span>
              <span className="bg-gray-700 text-xs rounded-full px-2 py-0.5">
                {loadedDocuments.length}
              </span>
            </div>
            
            {loadedDocuments.map(doc => (
              <button 
                key={doc.id}
                className={`flex items-center p-2 w-full text-left rounded-md text-sm mb-1
                  ${activeDocument?.id === doc.id ? 'bg-gray-700 text-blue-300' : 'hover:bg-gray-700 text-gray-300'}`}
                onClick={() => switchActiveDocument(doc.id)}
              >
                <FileText size={14} className="mr-2 text-gray-400" />
                <span className="truncate">{doc.metadata.filename}</span>
              </button>
            ))}
            
            <button 
              className="flex items-center p-2 w-full text-left rounded-md hover:bg-gray-700 text-sm text-gray-400"
            >
              <Plus size={14} className="mr-2" />
              <span>Subir más...</span>
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-auto">
        <button 
          className="flex items-center p-3 w-full text-left rounded-md hover:bg-gray-700 text-sm"
          onClick={clearConversation}
        >
          <Trash2 size={16} className="mr-2" />
          <span>Limpiar conversaciones</span>
        </button>
      </div>
    </div>
  );
}