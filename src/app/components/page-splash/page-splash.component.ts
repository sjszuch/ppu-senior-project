import { Component, OnInit } from '@angular/core';
import * as employeeData from '../../../assets/dummy.json';

import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-page-splash',
  templateUrl: './page-splash.component.html',
  styleUrls: ['./page-splash.component.scss']
})
export class PageSplashComponent implements OnInit {
  // Data from JSON file
  data: any = employeeData;

  // Array of employees (from JSON)
  employees: any[] = this.data.employees;

  apiData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer() {
    this.http.get('https://ppu-senior-project.onrender.com/api/data').subscribe(
      (data: any) => {
        console.log('Data from server:', data);
        this.apiData = data;
      },
      (error) => {
        console.error('Error fetching data from server:', error);
      }
    );
  }

  
  
}
