import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepfive",
  templateUrl: "./stepfive.component.html",
  styleUrls: ["../step.component.scss"]
})
export class StepfiveComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
