import { Component, OnInit } from '@angular/core';

import { StepService } from './step.service';

@Component({
  selector: 'app-steptwo-c',
  templateUrl: './steptwo-c.component.html',
  styleUrls: ['./step.component.scss']
})
export class SteptwoCComponent implements OnInit {

  constructor(private stepService: StepService) { }

  ngOnInit() {
  }

  onRead() {
    this.stepService.onRead();
  }

}
