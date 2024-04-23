import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog-evals',
  templateUrl: './dialog-evals.component.html',
  styleUrls: ['./dialog-evals.component.scss']
})


export class DialogEvalsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public id: any,
    private http: HttpClient
 ) { }

 

 ngOnInit() {
  console.log(this.id)
}

  deleteEmployee() {
    console.log(this.id.id)
    const apiUrl = 'https://ppu-senior-project.onrender.com/api/delete';

    this.http.delete(apiUrl + '/' + this.id.id).subscribe((response) => {
      console.log(response);
    }
    );
     
    
  }

}

