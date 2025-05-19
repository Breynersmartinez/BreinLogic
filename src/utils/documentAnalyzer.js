// src/utils/documentAnalyzer.js
import * as pdfjs from 'pdfjs-dist';
import * as mammoth from 'mammoth';

// Asegúrate de configurar el worker para pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



export async function analyzeDocument(file) {
  if (!file) return null;
  
  try {
    switch (file.type) {
      case 'application/pdf':
        return await extractPdfContent(file);
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return await extractDocxContent(file);
      case 'text/plain':
        return await extractTxtContent(file);
      default:
        throw new Error(`Tipo de archivo no soportado: ${file.type}`);
    }
  } catch (error) {
    console.error('Error analizando documento:', error);
    throw error;
  }
}

async function extractPdfContent(file) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      fullText += pageText + '\n\n';
    }
    
    return {
      text: fullText,
      metadata: {
        pageCount: pdf.numPages,
        type: 'PDF',
        filename: file.name
      }
    };
  } catch (error) {
    console.error('Error extrayendo contenido PDF:', error);
    throw new Error('No se pudo procesar el archivo PDF');
  }
}

async function extractDocxContent(file) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    
    return {
      text: result.value,
      metadata: {
        type: 'DOCX',
        filename: file.name,
        warnings: result.messages
      }
    };
  } catch (error) {
    console.error('Error extrayendo contenido DOCX:', error);
    throw new Error('No se pudo procesar el archivo DOCX');
  }
}

async function extractTxtContent(file) {
  try {
    const text = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = e => reject(new Error('Error leyendo archivo de texto'));
      reader.readAsText(file);
    });
    
    return {
      text,
      metadata: {
        type: 'TXT',
        filename: file.name
      }
    };
  } catch (error) {
    console.error('Error extrayendo contenido TXT:', error);
    throw new Error('No se pudo procesar el archivo de texto');
  }
}

// Funciones para análisis básico del texto
export function getBasicTextAnalysis(text) {
  if (!text) return {};
  
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphCount = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
  
  // Análisis de frecuencia de palabras (las 10 más comunes)
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 2);
  
  const wordFrequency = {};
  words.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });
  
  const topWords = Object.entries(wordFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
    
  return {
    wordCount,
    charCount,
    sentenceCount,
    paragraphCount,
    averageWordLength: charCount / wordCount,
    topWords
  };
}