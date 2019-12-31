import { Component, OnInit } from '@angular/core';

import { StepService } from './step.service';

@Component({
  selector: 'app-stepone-f',
  templateUrl: './stepone-f.component.html',
  styleUrls: ['./step.component.scss']
})
export class SteponeFComponent implements OnInit {

  constructor(private stepService: StepService) { }

  ngOnInit() {
  }

  onRead() {
    this.stepService.onRead();
  }

}
