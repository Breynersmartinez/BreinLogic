// Función para abrir un documento en una nueva ventana al hacer clic en el botón
function openDocument() {
    // Abre una nueva ventana con la URL proporcionada
    window.open('https://www.bing.com/ck/a?!&&p=8a0faf9c366d3373JmltdHM9MTcxMjUzNDQwMCZpZ3VpZD0yY2E5ODJiMy1mZTQxLTYwYmEtMGMzMS05MDBhZmZlZTYxMmQmaW5zaWQ9NTE5Ng&ptn=3&ver=2&hsh=3&fclid=2ca982b3-fe41-60ba-0c31-900affee612d&psq=inicio+de+sesion+google&u=a1aHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2xvZ2luP2hsPWVz&ntb=1', '_blank');
}

// Agrega un evento de clic al botón con el ID 'siguienteBtn'
document.getElementById('siguienteBtn').addEventListener('click', function() {
    // Redirige a la página 'index.html' al hacer clic en el botón
   
    window.location.href = 'indexChatBot.html';
});

// Función para abrir un documento en una nueva ventana al hacer clic en el botón
function UCC() {
    // Abre una nueva ventana con la URL proporcionada
    window.open('https://www.ucc.edu.co/');
}


document.getElementById('register').addEventListener('click', function() {
    // Redirige a la página 'index.html' al hacer clic en el botón
    window.location.href = 'indexNewUser.html';
  });