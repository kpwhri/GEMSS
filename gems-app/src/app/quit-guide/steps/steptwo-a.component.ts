import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { StepService } from "../step.service";

@Component({
  selector: "app-steptwo-a",
  templateUrl: "./steptwo-a.component.html",
  styleUrls: ["../step.component.scss"]
})
export class SteptwoAComponent implements OnInit {
  constructor(private stepService: StepService, private router: Router) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
    this.router.navigate(["/", "quit-guide", "step", "2"]);
  }
}
