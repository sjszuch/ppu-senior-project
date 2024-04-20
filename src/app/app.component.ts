import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cmps480';
  isLoading: boolean = true; 


  ngOnInit(): void {
    // Simulate a delay before hiding the loading spinner
    setTimeout(() => {
      this.isLoading = false; // Hide the loading spinner after some time (e.g., 2 seconds)
    }, 3000); // Adjust the delay time as needed (in milliseconds)
  }
 
}
