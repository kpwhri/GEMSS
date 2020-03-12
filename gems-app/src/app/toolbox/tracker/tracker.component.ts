import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Color, BaseChartDirective, Label } from 'ng2-charts';

import { TrackerService } from './tracker.service';
import { ChartDataSets } from 'chart.js';

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
    responsive: true,
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: '# of cigarettes smoked',
          fontColor: '#0078b3'
        },
        ticks: {
          precision: 0
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'date',
          fontColor: '#0078b3'
        }
      }]
    }
  }

  public graphChartType = 'line';
  public graphLegend = false;

  public graphChartColors: Color[] = [{
    borderColor: '#003b71',
    pointBackgroundColor: '#003b71',
    pointRadius: 4
  }];

  public graphLabels: Label[] = [];
  public graphData: ChartDataSets[] = [
    { data: [], label: 'cigarette tracker', fill: false }
  ];

  ngOnInit() {
    this.getGraphData();
  }

  getGraphData() {
    this.trackerService.getGraphData().subscribe(
      data => {
        const cleanData = this.processGraphData(data, 7);
        // console.log("In getGraphData()");
        // console.log(cleanData);
        return cleanData;
      }
    );
  }

  processGraphData(data, days) {
    // WHAT IF someone adds multiple trackings on the same day???
    // RETURN max, either with group_by (prefered) or order DESC
    const startDate = new Date();
    const endDate = new Date();
    startDate.setDate(endDate.getDate() - days + 1);
    let dataArray = new Array(days).fill(0);
    let i = 0;
    console.log("processGraphData - one at aa time");
    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      this.graphLabels.push(d.getDate().toString());
      let graphDate = d.toISOString().slice(0, 10);
      for (let tracker of data) {
        if (tracker.track_dt === graphDate) {
          console.log("graphDate: " + graphDate.toString());
          console.log("tracker.track_dt: " + tracker.track_dt.toString());
          console.log("tracker.cigs_num: " + tracker.cigs_num.toString());
          dataArray[i] = tracker.cigs_num;
        }
      }
      i++;
    }
    this.graphData = [{ data: dataArray, label: 'cigarette tracker', fill: false }]
    return data;
  }

  onSubmit() {
    this.trackerService.saveTracker(this.trackerForm.value);
  }

}
