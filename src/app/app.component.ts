import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cmps480';
  isLoading: boolean = true; 

// spinner is set up fro 2 secods before loading 
  ngOnInit(): void {
    
    setTimeout(() => {
      this.isLoading = false; 
    }, 2000); 
  }
 
}
