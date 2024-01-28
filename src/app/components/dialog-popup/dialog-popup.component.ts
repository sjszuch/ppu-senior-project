import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss']
})
export class DialogPopupComponent {

  
  constructor(private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public id: any,) {}

  openSnackBar() {
    this._snackBar.open("Rating submitted!", "Close", {duration: 3000});
  }
}
