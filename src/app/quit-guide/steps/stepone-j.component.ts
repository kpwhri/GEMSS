import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepone-j",
  templateUrl: "./stepone-j.component.html",
  styleUrls: ["../step.component.scss"]
})
export class SteponeJComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
