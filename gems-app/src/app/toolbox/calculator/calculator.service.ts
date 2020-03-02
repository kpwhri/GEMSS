import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

import { httpOptions, apiUrl } from "../../shared/globals";
import { MessageService } from "../../message.service";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getCalculations() {
    this.messageService.add("CalculatorService: fetched calculations");
    return this.http
      .get(apiUrl + "calculator/calculators", httpOptions)
      .pipe(catchError(this.handleError));
  }

  getCalculation(calculationId) {
    this.messageService.add("CalculatorService: fetched calculation");
    return this.http
      .get(apiUrl + "calculator/calculators/" + calculationId, httpOptions)
      .pipe(catchError(this.handleError));
  }

  saveCalculation(calculation: { packs_per_day: number, cost_per_pack: number }) {
    this.messageService.add("CalculatorService: saved calculation");
    return this.http
      .post(apiUrl + "calculator/calculators/", calculation, httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}
