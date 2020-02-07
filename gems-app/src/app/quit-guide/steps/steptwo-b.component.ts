import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { StepService } from "../step.service";

@Component({
  selector: "app-steptwo-b",
  templateUrl: "./steptwo-b.component.html",
  styleUrls: ["../step.component.scss"]
})
export class SteptwoBComponent implements OnInit {
  constructor(private stepService: StepService, private router: Router) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
    this.router.navigate(["/", "quit-guide", "step", "2"]);
  }
}
