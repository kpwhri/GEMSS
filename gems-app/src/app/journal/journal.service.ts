import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

import { httpOptions, apiUrl } from "../shared/globals";
import { JournalEntry } from "./journal-entry";
import { MessageService } from "../message.service";

@Injectable({
  providedIn: "root"
})
export class JournalService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) { }


  getEntries(): Observable<JournalEntry[]> {
    this.messageService.add("JournalService: fetched entry");
    return this.http
      .get<JournalEntry[]>(apiUrl + "journal/entries", httpOptions)
      .pipe(catchError(this.handleError));
  }

  getEntry(entryId): Observable<JournalEntry> {
    return this.http
      .get<JournalEntry>(apiUrl + "journal/entries/" + entryId, httpOptions)
      .pipe(catchError(this.handleError));
  }

  saveEntry(journalEntry: { title: string, entry: string }) {
    return this.http
      .post<JournalEntry>(apiUrl + "journal/entries/", journalEntry, httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe(responseData => {
        this.router.navigate(['/journal/list']);
      });
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}
