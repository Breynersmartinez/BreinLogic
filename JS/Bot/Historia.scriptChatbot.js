// Función para guardar el historial en localStorage
function guardarHistorialConversaciones(conversaciones) {
    localStorage.setItem('historialConversaciones', JSON.stringify(conversaciones));
}

// Función para cargar el historial desde localStorage
function cargarHistorialConversaciones() {
    const historial = localStorage.getItem('historialConversaciones');
    return historial ? JSON.parse(historial) : [];
}

// Función para eliminar una conversación del historial
function eliminarConversacion(index) {
    let historialConversaciones = cargarHistorialConversaciones();
    
    if (index >= 0 && index < historialConversaciones.length) {
        historialConversaciones.splice(index, 1); // Eliminar conversación específica
        guardarHistorialConversaciones(historialConversaciones);
        mostrarHistorialConversaciones(); // Refrescar la lista
    }
}

// Función para mostrar historial en una lista interactiva con opción de eliminar
function mostrarHistorialConversaciones() {
    const historialContainer = document.getElementById('historialContainer');
    historialContainer.innerHTML = ''; // Limpiar contenido

    const historialConversaciones = cargarHistorialConversaciones();
    
    if (historialConversaciones.length === 0) {
        historialContainer.innerHTML = '<p>No hay conversaciones previas. 🕒 </p>';
        return;
    }

    const lista = document.createElement('ul');
    
    historialConversaciones.forEach((conversacion, index) => {
        const item = document.createElement('li');
        
        // Botón para cargar la conversación
        const botonCargar = document.createElement('button');
        botonCargar.textContent = `Conversación ${index + 1}`;
        botonCargar.addEventListener('click', () => cargarConversacion(index));
        
        // Botón para eliminar la conversación
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '🗑️';
        botonEliminar.style.marginLeft = '10px';
        botonEliminar.addEventListener('click', () => eliminarConversacion(index));

        item.appendChild(botonCargar);
        item.appendChild(botonEliminar);
        lista.appendChild(item);
    });

    historialContainer.appendChild(lista);
}

// Función para cargar una conversación del historial
function cargarConversacion(index) {
    const historialConversaciones = cargarHistorialConversaciones();
    if (!historialConversaciones[index]) return;

    const { userInput, botResponse } = historialConversaciones[index];

    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML = ''; // Limpiar chat actual

    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = userInput;
    chatWindow.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');
    botMessage.textContent = botResponse;
    chatWindow.appendChild(botMessage);
}

// Modificación de la función handleUserMessage para guardar el historial
async function handleUserMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatWindow = document.getElementById('chatWindow');

    if (!userInput.trim()) return;

    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = userInput;
    chatWindow.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');
    botMessage.textContent = 'Pensando...';
    chatWindow.appendChild(botMessage);

    const botResponse = await generateResponse(userInput);
    botMessage.textContent = botResponse;

    // Guardar en el historial
    const conversacion = { userInput, botResponse };
    const historialConversaciones = cargarHistorialConversaciones();
    historialConversaciones.push(conversacion);
    guardarHistorialConversaciones(historialConversaciones);

    document.getElementById('userInput').value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Actualizar la lista de historial
    mostrarHistorialConversaciones();
}

// Llamar a la función de historial al cargar la página
document.addEventListener('DOMContentLoaded', mostrarHistorialConversaciones);