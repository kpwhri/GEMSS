import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepone-j",
  templateUrl: "./stepone-j.component.html",
  styleUrls: ["../step.component.scss"]
})
export class SteponeJComponent implements OnInit {
  constructor(private stepService: StepService, private router: Router) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
    this.router.navigate(["/", "quit-guide", "step", "1"]);
  }
}
