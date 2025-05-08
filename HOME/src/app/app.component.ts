import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BreinLogic';

  redirectToBot() {
    // Replace this URL with the actual URL of your BreinLogic bot
    window.location.href = 'https://breynersmartinez.github.io/BreinLogic/';
    
    // Alternative: If you're using Angular Router, you can use:
    // this.router.navigate(['/chat']);
  }
}