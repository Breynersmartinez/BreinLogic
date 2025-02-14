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