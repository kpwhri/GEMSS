import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepfour-c",
  templateUrl: "./stepfour-c.component.html",
  styleUrls: ["../step.component.scss"]
})
export class StepfourCComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
