import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss']
})
export class DialogPopupComponent {

  comment!: string;
  rating!: number;

  
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public id: any,
  ) { }


  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", {duration: 3000});
  }

  submitRating() {

    if (!this.comment) {
      this.openSnackBar("Please enter a comment.");
      return;
    } else if (!this.rating) {
      this.openSnackBar("Please enter a rating.");
      return;
    } else {

    this.openSnackBar("Rating submitted!");
    console.log('Comment:', this.comment);
    console.log('Rating:', this.rating);
    console.log('ID:', this.id.id);

    // Submits the new comment and rating. Similar to adding employees.
    const data = {

      comment: this.comment,
      id: this.id.id,
      // rating: this.rating
    };

    const apiUrl = 'https://ppu-senior-project.onrender.com/api/newrating';

    this.http.post(apiUrl, data)
      .subscribe({
        next: (response: any) => {
          console.log('API Response:', response);
        },
        error: (error: any) => {
          console.error('API Error:', error);
        }
      });

    }
  }
}