import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';
import { DialogEvalsComponent } from '../dialog-evals/dialog-evals.component';

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
  @Input() id!: string;
  @Input() comments!: string[];

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogPopupComponent);
  }

  openEvals(id: string) {
    this.dialog.open(DialogEvalsComponent, {
      data: {
        id: id,
        fName: this.fName,
        lName: this.lName,
        comments: this.comments,
        rating: this.rating,
        ratingsarray: [1, 2, 3]
      }
    });
  }
}
