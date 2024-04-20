
// DELETE request
// import { Component } from '@angular/core';
import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.scss']
})


export class DeletepopupComponent {

  id: number = 0;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", { duration: 3000 });
  }

  // Deletes an employee based on ID
  deleteEmployee() {
    const apiUrl = 'https://ppu-senior-project.onrender.com/api/delete/id:'; 

    this.http.delete(`${apiUrl}/${this.id}`)
      .subscribe({
        next: (response: any) => {
          console.log('API Response:', response);
          this.openSnackBar('Employee deleted successfully');
        },
        error: (error: any) => {
          console.error('API Error:', error);
          this.openSnackBar('Failed to delete employee');
        }
      });
  }
}








