import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepsix",
  templateUrl: "./stepsix.component.html",
  styleUrls: ["../step.component.scss"]
})
export class StepsixComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
