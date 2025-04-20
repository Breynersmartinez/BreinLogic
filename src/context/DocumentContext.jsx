// src/context/DocumentContext.jsx
import { createContext, useContext, useState } from 'react';

const DocumentContext = createContext();

export function DocumentProvider({ children }) {
  const [loadedDocuments, setLoadedDocuments] = useState([]);
  const [activeDocument, setActiveDocument] = useState(null);

  // Añadir un nuevo documento al contexto
  const addDocument = (docData) => {
    // Crear un ID único para el documento
    const newDoc = {
      ...docData,
      id: `doc-${Date.now()}`,
      timestamp: new Date(),
    };
    
    setLoadedDocuments(prev => [...prev, newDoc]);
    setActiveDocument(newDoc);
    
    return newDoc;
  };

  // Eliminar un documento del contexto
  const removeDocument = (docId) => {
    setLoadedDocuments(prev => prev.filter(doc => doc.id !== docId));
    
    // Si el documento activo es el que se está eliminando, limpiarlo
    if (activeDocument && activeDocument.id === docId) {
      setActiveDocument(null);
    }
  };

  // Cambiar el documento activo
  const switchActiveDocument = (docId) => {
    const doc = loadedDocuments.find(doc => doc.id === docId);
    setActiveDocument(doc || null);
  };

  // Obtener el documento activo
  const getActiveDocumentContent = () => {
    return activeDocument ? activeDocument.text : null;
  };

  // Obtener información resumida del documento activo
  const getActiveDocumentSummary = () => {
    if (!activeDocument) return null;
    
    return {
      id: activeDocument.id,
      filename: activeDocument.metadata.filename,
      type: activeDocument.metadata.type,
      wordCount: activeDocument.analysis.wordCount,
      charCount: activeDocument.analysis.charCount,
    };
  };

  // Valor del contexto que se proporcionará
  const contextValue = {
    loadedDocuments,
    activeDocument,
    addDocument,
    removeDocument,
    switchActiveDocument,
    getActiveDocumentContent,
    getActiveDocumentSummary,
  };

  return (
    <DocumentContext.Provider value={contextValue}>
      {children}
    </DocumentContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useDocuments() {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error('useDocuments debe usarse dentro de un DocumentProvider');
  }
  return context;
}