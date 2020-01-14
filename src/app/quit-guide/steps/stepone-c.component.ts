import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepone-c",
  templateUrl: "./stepone-c.component.html",
  styleUrls: ["../step.component.scss"]
})
export class SteponeCComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
