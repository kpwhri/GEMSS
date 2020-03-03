import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TrackerService } from './tracker.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  constructor(private trackerService: TrackerService) { }

  cigs_num: number;
  track_dt: Date;

  trackerForm = new FormGroup({
    cigs_num: new FormControl(''),
    track_dt: new FormControl(''),
  });


  ngOnInit() {
  }

  onSubmit() {

  }

}
