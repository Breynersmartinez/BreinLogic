function toggleSettings() {
  var settingsContent = document.getElementById("settingsContent");
  settingsContent.classList.toggle("show");
}

// Cerrar el menú de ajustes si se hace clic fuera de él
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-btnSettings')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var settings = document.getElementsByClassName("dropdown-content-settings");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
      for (i = 0; i < settings.length; i++) {
          var openSettings = settings[i];
          if (openSettings.classList.contains('show')) {
              openSettings.classList.remove('show');
          }
      }
  }
}