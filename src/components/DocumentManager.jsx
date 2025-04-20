// src/components/DocumentManager.jsx
import { File, X, FileText, FileText as FileTextIcon } from 'lucide-react';
import { useDocuments } from '../context/DocumentContext';

export default function DocumentManager() {
  const { 
    loadedDocuments, 
    activeDocument, 
    removeDocument, 
    switchActiveDocument 
  } = useDocuments();

  if (loadedDocuments.length === 0) {
    return null;
  }

  const getIconForDocType = (type) => {
    switch (type) {
      case 'PDF':
        return <File size={16} />;
      case 'DOCX':
        return <FileTextIcon size={16} />;
      case 'TXT':
        return <File size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  const formatTimestamp = (date) => {
    return new Intl.DateTimeFormat('es', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="mb-4">
      <div className="bg-gray-800 rounded-lg p-3">
        <h3 className="text-sm font-medium mb-2 text-gray-300">Documentos cargados</h3>
        
        <ul className="space-y-1">
          {loadedDocuments.map(doc => (
            <li 
              key={doc.id} 
              className={`flex items-center justify-between p-2 rounded-md text-sm
                ${activeDocument?.id === doc.id ? 'bg-blue-900/30 text-blue-200' : 'hover:bg-gray-700'}`}
            >
              <button 
                className="flex items-center flex-1 text-left"
                onClick={() => switchActiveDocument(doc.id)}
              >
                <span className="mr-2 text-blue-400">
                  {getIconForDocType(doc.metadata.type)}
                </span>
                <span className="truncate flex-1">{doc.metadata.filename}</span>
                <span className="text-xs text-gray-500 ml-2">
                  {formatTimestamp(doc.timestamp)}
                </span>
              </button>
              
              <button 
                className="p-1 hover:text-red-400"
                onClick={() => removeDocument(doc.id)}
                title="Eliminar documento"
              >
                <X size={14} />
              </button>
            </li>
          ))}
        </ul>
        
        {activeDocument && (
          <div className="mt-3 text-xs p-2 bg-gray-700 rounded">
            <p className="font-medium">{activeDocument.metadata.filename}</p>
            <p className="text-gray-400 mt-1">
              {activeDocument.analysis.wordCount} palabras · 
              {' '}{activeDocument.analysis.paragraphCount} párrafos · 
              {' '}{(activeDocument.fileSize / 1024).toFixed(2)} KB
            </p>
          </div>
        )}
      </div>
    </div>
  );
}