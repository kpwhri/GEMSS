import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";

import { httpOptions, apiUrl } from "../../shared/globals";
import { MessageService } from "../../message.service";

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getGraphData() {
    this.messageService.add("TrackerService: pulling Tracker graph data");
    return this.http
      .get(apiUrl + "tracker/graph", httpOptions)
      .pipe(catchError(this.handleError));
  }

  getTrackers() {
    this.messageService.add("TrackerService: fetched trackers");
    return this.http
      .get(apiUrl + "tracker/trackers", httpOptions)
      .pipe(catchError(this.handleError));
  }

  getTracker(trackerId) {
    this.messageService.add("TrackerService: fetched tracker");
    return this.http
      .get(apiUrl + "tracker/trackers/" + trackerId, httpOptions)
      .pipe(catchError(this.handleError));
  }

  saveTracker(tracker: { cigs_num: number, track_dt: Date }) {
    this.messageService.add("TrackerService: saved tracker");
    const newTracker = {
      cigs_num: tracker.cigs_num,
      track_dt: tracker.track_dt.toISOString().slice(0, 10)
    };
    return this.http
      .post(apiUrl + "tracker/trackers/", newTracker, httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe(responseData => {
        // console.log(responseData);
      });
  }

  private handleError(error: any) {
    // Later send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}
