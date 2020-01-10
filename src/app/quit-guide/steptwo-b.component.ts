import { Component, OnInit } from '@angular/core';

import { StepService } from './step.service';

@Component({
  selector: 'app-steptwo-b',
  templateUrl: './steptwo-b.component.html',
  styleUrls: ['./step.component.scss']
})
export class SteptwoBComponent implements OnInit {

  constructor(private stepService: StepService) { }

  ngOnInit() {
  }

  onRead() {
    this.stepService.onRead();
  }

}
