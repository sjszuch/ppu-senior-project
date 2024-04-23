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

  @Input() ratings!: string[];

  averageRating: number = 0;

  // On init, calculates the average rating of the employee from the ratings array
  ngOnInit() {
    let total = 0;
    for (let i = 0; i < this.ratings.length; i++) {
      total += parseInt(this.ratings[i]);
    }
    this.averageRating = total / this.ratings.length;
  }

  constructor(public dialog: MatDialog) { }

  openDialog(id: string) {
    this.dialog.open(DialogPopupComponent, {
      data: {
        id: id,
        comments: this.comments,
        fName: this.fName,
        lName: this.lName,
        ratings: this.ratings
      }
    });
  }

  openEvals(id: string) {
    this.dialog.open(DialogEvalsComponent, {
      data: {
        id: id,
        comments: this.comments,
        fName: this.fName,
        lName: this.lName,
        ratings: this.ratings
      }
    });
  }
}
