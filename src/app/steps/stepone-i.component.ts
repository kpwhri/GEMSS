import { Component, OnInit } from '@angular/core';

import { StepService } from './step.service';

@Component({
  selector: 'app-stepone-i',
  templateUrl: './stepone-i.component.html',
  styleUrls: ['./step.component.scss']
})
export class SteponeIComponent implements OnInit {

  constructor(private stepService: StepService) { }

  ngOnInit() {
  }

  onRead() {
    this.stepService.onRead();
  }

}
