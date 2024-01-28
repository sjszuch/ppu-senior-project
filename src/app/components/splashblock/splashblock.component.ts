import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';

@Component({
  selector: 'app-splashblock',
  templateUrl: './splashblock.component.html',
  styleUrls: ['./splashblock.component.scss']
})
export class SplashblockComponent {
  @Input() fName!: string;
  @Input() lName!: string;
  @Input() pos!: string;
  @Input() rating!: string;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogPopupComponent);
  }
}
