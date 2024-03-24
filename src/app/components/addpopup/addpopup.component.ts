import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addpopup',
  templateUrl: './addpopup.component.html',
  styleUrls: ['./addpopup.component.scss']
})
export class AddpopupComponent {

  firstName!: string;
  lastName!: string;
  position!: string;


  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public id: any,
  ) { }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", {duration: 3000});
  }

  // Sumbits a new employee. Similar to adding comments.
  submitEmployee() {
    const data = {
      first_name: this.firstName,
      last_name: this.lastName,
      position: this.position,
      id: this.id
    };

    const apiUrl = 'https://ppu-senior-project.onrender.com/api/newentry';

    this.http.post(apiUrl, data)
      .subscribe({
        next: (response: any) => {
          console.log('API Response:', response);
          this.openSnackBar('Employee added successfully');
        },
        error: (error: any) => {
          console.error('API Error:', error);
          this.openSnackBar('Failed to add employee');
        }
      });

      // Refreshes the page to show the new employee
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
}
