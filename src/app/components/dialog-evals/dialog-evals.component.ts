import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-evals',
  templateUrl: './dialog-evals.component.html',
  styleUrls: ['./dialog-evals.component.scss']
})


export class DialogEvalsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public id: any,

 ) { }

 

 ngOnInit() {
  console.log(this.id)
}

}

