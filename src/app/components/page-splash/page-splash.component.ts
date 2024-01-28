import { Component } from '@angular/core';
import * as employeeData from '../../../assets/dummy.json';

@Component({
  selector: 'app-page-splash',
  templateUrl: './page-splash.component.html',
  styleUrls: ['./page-splash.component.scss']
})
export class PageSplashComponent {
  // Data from JSON file
  data: any = employeeData;

  // Array of employees (from JSON)
  employees: any[] = this.data.employees;


  
}
