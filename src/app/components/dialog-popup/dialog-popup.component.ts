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

  openSnackBar() {
    this._snackBar.open("Rating submitted!", "Close", {duration: 3000});
  }

  submitRating() {
    this.openSnackBar();

    // Submits the new comment and rating. Similar to adding employees.
    const data = {
      comment: this.comment,
      id: this.id,
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
