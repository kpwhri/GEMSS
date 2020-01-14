import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-steptwo-a",
  templateUrl: "./steptwo-a.component.html",
  styleUrls: ["../step.component.scss"]
})
export class SteptwoAComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
