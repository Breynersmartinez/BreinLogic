// src/components/FileUpload.jsx
import { useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { analyzeDocument, getBasicTextAnalysis } from '../utils/documentAnalyzer';
import { useDocuments } from '../context/DocumentContext';

export default function FileUpload({ onFileProcessed, setError }) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { addDocument } = useDocuments();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = async (file) => {
    if (!file) return;
    
    const allowedTypes = [
      'application/pdf', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      setError('Solo se permiten archivos PDF, DOCX o TXT.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      setError('El archivo no debe superar los 10MB.');
      return;
    }

    setFileName(file.name);
    setIsLoading(true);
    
    try {
      // Analizar el documento
      const documentData = await analyzeDocument(file);
      
      // Realizar análisis básico del texto
      const textAnalysis = getBasicTextAnalysis(documentData.text);
      
      // Añadir el documento al contexto
      const docWithAnalysis = {
        ...documentData,
        analysis: textAnalysis,
        fileSize: file.size
      };
      
      const addedDoc = addDocument(docWithAnalysis);
      
      // Preparar un resumen para el usuario
      const fileSummary = `
# Documento cargado: ${file.name}

## Información general
- Tipo: ${documentData.metadata.type}
- Tamaño: ${(file.size / 1024).toFixed(2)} KB

## Estadísticas
- Palabras: ${textAnalysis.wordCount}
- Caracteres: ${textAnalysis.charCount}
- Oraciones: ${textAnalysis.sentenceCount}
- Párrafos: ${textAnalysis.paragraphCount}

## Contenido (primeras 500 caracteres)
\`\`\`
${documentData.text.slice(0, 500)}${documentData.text.length > 500 ? '...' : ''}
\`\`\`

El documento ha sido cargado y está disponible para consulta. Puedes hacerme preguntas sobre su contenido.`;

      onFileProcessed(fileSummary, addedDoc.id);
    } catch (err) {
      console.error('Error reading file:', err);
      setError(`Error al procesar el archivo: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <div 
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-gray-600'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isLoading ? (
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 border-2 border-t-blue-500 border-blue-200 rounded-full animate-spin mb-2"></div>
            <p>Procesando archivo...</p>
          </div>
        ) : fileName ? (
          <div className="flex items-center justify-center space-x-2">
            <FileText size={18} className="text-blue-400" />
            <span className="truncate max-w-xs">{fileName}</span>
          </div>
        ) : (
          <>
            <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p className="mb-1 text-sm">
              <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
            </p>
            <p className="text-xs text-gray-500">PDF, DOCX, o TXT (máx. 10MB)</p>
          </>
        )}
      </div>
      
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept=".pdf,.docx,.txt,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
        onChange={handleFileChange}
      />
      
      <label 
        htmlFor="file-upload" 
        className="mt-2 inline-flex items-center text-sm text-blue-400 cursor-pointer hover:text-blue-300"
      >
        <Upload size={14} className="mr-1" />
        {fileName ? 'Subir otro archivo' : 'Subir archivo'}
      </label>
      
      {fileName && (
        <div className="mt-2 p-2 bg-gray-800 rounded text-xs flex items-start">
          <AlertCircle size={14} className="text-yellow-400 mr-1 mt-0.5 flex-shrink-0" />
          <span>
            El análisis de documentos se realiza localmente en tu navegador. Los documentos cargados 
            estarán disponibles durante toda la sesión de chat.
          </span>
        </div>
      )}
    </div>
  );
}