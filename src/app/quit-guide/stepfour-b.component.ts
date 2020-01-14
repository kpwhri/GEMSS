import { Component, OnInit } from "@angular/core";

import { StepService } from "./step.service";

@Component({
  selector: "app-stepfour-b",
  templateUrl: "./stepfour-b.component.html",
  styleUrls: ["./step.component.scss"]
})
export class StepfourBComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
