import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepone-b",
  templateUrl: "./stepone-b.component.html",
  styleUrls: ["../step.component.scss"]
})
export class SteponeBComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
