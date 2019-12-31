import { Component, OnInit } from '@angular/core';

import { StepService } from './step.service';

@Component({
  selector: 'app-stepone-k',
  templateUrl: './stepone-k.component.html',
  styleUrls: ['./step.component.scss']
})
export class SteponeKComponent implements OnInit {

  constructor(private stepService: StepService) { }

  ngOnInit() {
  }

  onRead() {
    this.stepService.onRead();
  }

}
