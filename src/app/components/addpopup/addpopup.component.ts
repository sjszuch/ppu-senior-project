import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-addpopup',
  templateUrl: './addpopup.component.html',
  styleUrls: ['./addpopup.component.scss']
})
export class AddpopupComponent {
  constructor(private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public id: any,) {}

  openSnackBar() {
    this._snackBar.open("Employee Added!", "Close", {duration: 3000});
  }
}
