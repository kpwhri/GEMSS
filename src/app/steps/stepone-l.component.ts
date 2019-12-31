import { Component, OnInit } from '@angular/core';

import { StepService } from './step.service';

@Component({
  selector: 'app-stepone-l',
  templateUrl: './stepone-l.component.html',
  styleUrls: ['./step.component.scss']
})
export class SteponeLComponent implements OnInit {

  constructor(private stepService: StepService) { }

  ngOnInit() {
  }

  onRead() {
    this.stepService.onRead();
  }

}
