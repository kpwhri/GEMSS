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

  public graphOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public graphLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public graphChartType = 'bar';
  public graphLegend = true;

  public graphData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  ngOnInit() {
  }

  onSubmit() {
    console.count("onSubmit component");
    this.trackerService.saveTracker(this.trackerForm.value);
  }

}
