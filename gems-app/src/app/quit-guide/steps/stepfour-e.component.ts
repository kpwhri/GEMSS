import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepfour-e",
  templateUrl: "./stepfour-e.component.html",
  styleUrls: ["../step.component.scss"]
})
export class StepfourEComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
