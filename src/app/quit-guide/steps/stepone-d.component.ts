import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepone-d",
  templateUrl: "./stepone-d.component.html",
  styleUrls: ["../step.component.scss"]
})
export class SteponeDComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
