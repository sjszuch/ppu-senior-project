import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddpopupComponent } from '../addpopup/addpopup.component';

@Component({
  selector: 'app-addblock',
  templateUrl: './addblock.component.html',
  styleUrls: ['./addblock.component.scss']
})
export class AddblockComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AddpopupComponent, {
    
    });
  }

}
