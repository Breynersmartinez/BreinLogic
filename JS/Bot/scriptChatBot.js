const answers = "AIzaSyCYuGCgTtw70-Mdn1Dj5LqryYDgprcMECE"; // Usa variables de entorno en producción



const answersbot = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${answers}`;



let chatHistory = []; // Guarda el historial de la conversación

async function generateResponse(userInput) {
    chatHistory.push({ role: "user", text: userInput });

    // Incluir contenido del documento en el contexto si está disponible
    let context = contenidoDocumento 
        ? `Documento: ${contenidoDocumento}\n\nPregunta: ${userInput}` 
        : userInput;

    // Construir historial del chat
    const contexto = chatHistory.map(msg => `${msg.role === "user" ? "Usuario" : "Bot"}: ${msg.text}`).join("\n");

    // Combinar el historial del chat con el contexto del documento
    const data = {
        contents: [{ parts: [{ text: contexto + "\n\n" + context }] }]
    };

    try {
        const response = await fetch(answersbot, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result && result.candidates && result.candidates.length > 0) {
            const botResponse = result.candidates[0].content.parts[0].text || "No tengo una respuesta en este momento.";

            chatHistory.push({ role: "bot", text: botResponse });

            // Guardar historial en localStorage
            localStorage.setItem("chatHistory", JSON.stringify(chatHistory));

            return botResponse;
        } else {
            return "Lo siento, no pude generar una respuesta.";
        }
    } catch (error) {
        console.error("Error al llamar a la API:", error);
        return "Hubo un error procesando tu solicitud.";
    }
}


async function handleUserMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatWindow = document.getElementById("chatWindow");

    if (!userInput.trim()) return;

    // Agregar mensaje del usuario al chat
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = userInput;
    chatWindow.appendChild(userMessage);

    // Agregar mensaje de carga del bot
const botMessage = document.createElement("div");
botMessage.classList.add("message", "bot-message");
botMessage.textContent = "Pensando...";
chatWindow.appendChild(botMessage);

// Pequeña pausa antes de llamar a la API (500ms)
await new Promise(resolve => setTimeout(resolve, 500));

const botResponse = await generateResponse(userInput);
botMessage.textContent = botResponse;
}
//funcion boton enviar
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sendButton").addEventListener("click", handleUserMessage);
});

// Evento para enviar mensaje con "Enter"
document.getElementById("userInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleUserMessage();
    }
});




// Función para crear una nueva conversación (limpiar el área de chat)
function crearNuevaConversacion() {
  const chatWindow = document.getElementById('chatWindow');
  chatWindow.innerHTML = ''; // Limpiar el contenido del área de chat
}


/*_________________________________________________ */
       /*INTALAR LIBRERIA:
       npm install botpress
       biblioteca Botpress en tu proyecto,
        y npm gestionará automáticamente las 
        dependencias necesarias.
*/

        /*letra 8421: conversion binaria, binario a decimal */

        /*USO DE LA LIBRERIA  TensorFlow.js */
        // Importa TensorFlow.js


      /* Procesamiento de archivos pdf */
      let contenidoDocumento = ""; // Variable global para almacenar el texto del PDF

      async function extraerTextoPDF(file) {
          const reader = new FileReader();
          reader.readAsArrayBuffer(file);
      
          return new Promise((resolve) => {
              reader.onload = async function () {
                  const pdf = await pdfjsLib.getDocument({ data: reader.result }).promise;
                  let texto = "";
      
                  for (let i = 1; i <= pdf.numPages; i++) {
                      const page = await pdf.getPage(i);
                      const content = await page.getTextContent();
                      texto += content.items.map(item => item.str).join(" ") + " ";
                  }
      
                  contenidoDocumento = texto; // Guardamos el contenido en la variable global
                  resolve(texto);
              };
          });
      }

// Función para manejar la carga de archivos
async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const chatWindow = document.getElementById("chatWindow");
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.textContent = "Procesando documento...";
    chatWindow.appendChild(botMessage);

    const textoDocumento = await extraerTextoPDF(file);
    const botResponse = await generateResponse(textoDocumento);
    botMessage.textContent = botResponse;
}

// Asignar evento al input de carga de archivos
document.getElementById("uploadFile").addEventListener("change", handleFileUpload);




