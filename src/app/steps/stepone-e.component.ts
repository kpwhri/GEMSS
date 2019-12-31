import { Component, OnInit } from '@angular/core';

import { StepService } from './step.service';

@Component({
  selector: 'app-stepone-e',
  templateUrl: './stepone-e.component.html',
  styleUrls: ['./step.component.scss']
})
export class SteponeEComponent implements OnInit {

  constructor(private stepService: StepService) { }

  ngOnInit() {
  }

  onRead() {
    this.stepService.onRead();
  }

}
