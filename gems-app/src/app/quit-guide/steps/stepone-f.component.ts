import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepone-f",
  templateUrl: "./stepone-f.component.html",
  styleUrls: ["../step.component.scss"]
})
export class SteponeFComponent implements OnInit {
  constructor(private stepService: StepService, private router: Router) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
    this.router.navigate(["/", "quit-guide", "step", "1"]);
  }
}
