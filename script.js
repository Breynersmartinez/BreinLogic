let solucionesComunes = []; // Variable para almacenar las preguntas y respuestas

// Función para cargar el archivo JSON
async function cargarRespuestasDesdeJSON() {
    try {
        const response = await fetch('respuestas.json');
        solucionesComunes = await response.json();
        console.log('Respuestas cargadas:', solucionesComunes);
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

// Función para encontrar la respuesta más adecuada
function obtenerRespuesta(userInput) {
    const lowerInput = userInput.toLowerCase(); // Convertir la entrada del usuario a minúsculas
    
    // Iterar a través de cada objeto en solucionesComunes
    for (let i = 0; i < solucionesComunes.length; i++) {
        const preguntas = solucionesComunes[i].questions;
        const respuestas = solucionesComunes[i].answers;

        // Buscar coincidencias exactas o similares
        for (let j = 0; j < preguntas.length; j++) {
            if (lowerInput === preguntas[j].toLowerCase()) {
                return respuestas[j];
            }
        }
    }

    return 'Lo siento, no tengo una respuesta para eso.'; // Si no encuentra coincidencias
}

// Función para manejar el envío del mensaje
async function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    var chatWindow = document.getElementById('chatWindow');

    var userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = userInput;
    chatWindow.appendChild(userMessage);

    var botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');
    chatWindow.appendChild(botMessage);

    var botResponse = obtenerRespuesta(userInput); // Obtener la respuesta correspondiente
    botMessage.textContent = botResponse;

    document.getElementById('userInput').value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Cargar las respuestas cuando la página esté lista
document.addEventListener("DOMContentLoaded", function() {
    cargarRespuestasDesdeJSON(); // Cargar el archivo JSON
    const inputField = document.getElementById("userInput");

    inputField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });
});
