const part1 = "AIzaSy";
const part2 = "CYuGCgTtw70";
const part3 = "-Mdn1Dj5Lqry";
const part4 = "YDgprcMECE";

const answers = part1 + part2 + part3 + part4;

const answersbot = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${answers}`;

async function generateResponse(userInput) {
    const data = {
        contents: [{ parts: [{ text: userInput }] }]
    };

    try {
        const response = await fetch(answersbot, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        // Extraer solo el texto de la respuesta de la IA
        if (result && result.candidates && result.candidates.length > 0) {
            return result.candidates[0].content.parts[0].text || "No tengo una respuesta en este momento.";
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

/* _______________Menu__________*/
 /*
     muestra u ocultar el menú desplegable cuando
      se hace clic en el botón correspondiente. 
      pone o quita la clase "show" al elemento 
      que contiene el menú desplegable.
     */
      function toggleDropdown() {
        var dropdownContent = document.getElementById("dropdownContent");
        dropdownContent.classList.toggle("show");
    }

    /* un evento que se activa cuando se hace clic
     en cualquier parte de la ventana del navegador. 
     Se utiliza aquí para cerrar el menú desplegable
      si se hace clic fuera de él. Si el clic no es 
      en el botón del menú desplegable, se cierra el
       menú desplegable.*/

    window.onclick = function(event) {
      if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
/*_________________________________________________ */
function mostrarHistorialConversaciones() {
   const historialConversaciones = cargarHistorialConversaciones();
   let historialHTML = '<h2>Historial de Conversaciones</h2><ul>';
   historialConversaciones.forEach(conversacion => {
       historialHTML += `<li><strong>Usuario:</strong> ${conversacion.userInput}</li>`;
       historialHTML += `<li><strong>Chatbot:</strong> ${conversacion.botResponse}</li>`;
   });
   historialHTML += '</ul>';
   // Mostrar el historial en una ventana emergente o en un área específica de la página
   alert(historialHTML); // Ejemplo: mostrar en una ventana emergente
}

// Función para crear una nueva conversación (limpiar el área de chat)
function crearNuevaConversacion() {
  const chatWindow = document.getElementById('chatWindow');
  chatWindow.innerHTML = ''; // Limpiar el contenido del área de chat
}


// Función para guardar el historial de conversaciones en el almacenamiento local
function guardarHistorialConversaciones(conversaciones) {
   localStorage.setItem('historialConversaciones', JSON.stringify(conversaciones));
}

// Función para cargar el historial de conversaciones desde el almacenamiento local
function cargarHistorialConversaciones() {
   const historialConversaciones = localStorage.getItem('historialConversaciones');
   return historialConversaciones ? JSON.parse(historialConversaciones) : [];
}


// Función para manejar el envío de mensajes del usuario
async function handleUserMessage() {
   const userInput = document.getElementById('userInput').value;
   const chatWindow = document.getElementById('chatWindow');
   const userMessage = document.createElement('div');
   userMessage.classList.add('message', 'user-message');
   userMessage.textContent = userInput;
   chatWindow.appendChild(userMessage);

   const botMessage = document.createElement('div');
   botMessage.classList.add('message', 'bot-message');
   chatWindow.appendChild(botMessage);

   const botResponse = await generateResponse(userInput);
   botMessage.textContent = botResponse;

      // Guardar la conversación actual en el historial
   const conversacion = { userInput, botResponse };
   const historialConversaciones = cargarHistorialConversaciones();
   historialConversaciones.push(conversacion);
   guardarHistorialConversaciones(historialConversaciones);


   document.getElementById('userInput').value = '';
   chatWindow.scrollTop = chatWindow.scrollHeight;
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

        // Agrega un evento de clic al botón con el ID 'siguienteBtn'
document.getElementById('Perfil').addEventListener('click', function() {
   // Redirige a la página 'index.html' al hacer clic en el botón
   window.location.href = 'indexUser.html';
});

document.getElementById('logOut').addEventListener('click', function() {
  // Redirige a la página 'index.html' al hacer clic en el botón
  window.location.href = 'indexLogin.html';
});

 /* La  función se llama cuando 
     se cambia el interruptor de tema
      (modo claro / oscuro).
       Dependiendo del estado del interruptor,
        llama a toggleDarkMode() para cambiar
         entre los modos claro y oscuro.*/
 

         function toggleDarkMode() {
          document.body.classList.toggle('modo_oscuro');
      }
         function toggleTheme() {
          var themeSwitch = document.getElementById("themeSwitch");
          if (themeSwitch.checked) {
              toggleDarkMode();
          } else {
              toggleDarkMode();
          }
      }

      