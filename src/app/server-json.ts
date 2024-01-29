// simulate interaction with the server

import { Injectable } from '@angular/core';
import { Observable, of } from '@angular';

@Injectable({
  providedIn: 'root'
})
export class MockEmployeeRatingService {
  rateEmployee(employeeId: string, rating: number, comment: string): Observable<any> {

    const mockResponse = {
      success: true,
      message: 'Rating submitted successfully',
      data: { employeeId, rating, comment }
    };

    return of(mockResponse);
  }
}
