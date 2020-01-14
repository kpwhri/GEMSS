import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepone-g",
  templateUrl: "./stepone-g.component.html",
  styleUrls: ["../step.component.scss"]
})
export class SteponeGComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
