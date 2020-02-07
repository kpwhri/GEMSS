import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

import { JournalEntry } from "./journal-entry";
import { MessageService } from "../message.service";

@Injectable({
  providedIn: "root"
})
export class JournalService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  apiUrl = "api/";

  getEntries(): Observable<JournalEntry[]> {
    this.messageService.add("JournalService: fetched entry");
    return this.http
      .get<JournalEntry[]>(this.apiUrl + "journalEntries")
      .pipe(catchError(this.handleError));
  }

  getEntry(entryId): Observable<JournalEntry> {
    return this.http
      .get<JournalEntry>(this.apiUrl + "journalEntries/" + entryId)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}
