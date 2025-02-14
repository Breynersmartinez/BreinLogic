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
  
  