

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';

@Component({
  selector: 'app-deleteblock',
  templateUrl: './deleteblock.component.html',
  styleUrls: ['./deleteblock.component.scss']
})
export class DeleteblockComponent {
  
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DeletepopupComponent, {
    
    });
  }
}