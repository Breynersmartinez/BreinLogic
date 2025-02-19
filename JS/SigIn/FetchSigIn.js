// URL de la API que deseas llamar
const apiUrl = 'https://api.ejemplo.com/endpoint';

// Datos a enviar en la solicitud POST
const datos = {
    nombre: 'Juan',
    edad: 30
};

// Función para hacer la solicitud POST
fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}` // Si necesitas autenticación
    },
    body: JSON.stringify(datos)
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Maneja la respuesta de la API
        console.log(data);
    })
    .catch(error => {
        // Maneja cualquier error que ocurra
        console.error('Hubo un problema con la solicitud: ', error);
    });
