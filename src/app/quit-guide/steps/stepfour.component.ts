import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

import { StepService } from "../step.service";
import { MatExpansionPanel } from "@angular/material/expansion";

@Component({
  selector: "app-stepfour",
  templateUrl: "./stepfour.component.html",
  styleUrls: ["../step.component.scss"]
})
export class StepfourComponent implements OnInit {
  @ViewChild("panel0", { static: false }) panel0: ElementRef<MatExpansionPanel>;
  @ViewChild("panel1", { static: false }) panel1: ElementRef<MatExpansionPanel>;
  @ViewChild("panel2", { static: false }) panel2: ElementRef<MatExpansionPanel>;
  @ViewChild("panel3", { static: false }) panel3: ElementRef<MatExpansionPanel>;
  @ViewChild("panel4", { static: false }) panel4: ElementRef<MatExpansionPanel>;
  @ViewChild("panel5", { static: false }) panel5: ElementRef<MatExpansionPanel>;
  @ViewChild("panel6", { static: false }) panel6: ElementRef<MatExpansionPanel>;

  constructor(private stepService: StepService, private router: Router) {}

  ngOnInit() {}

  onRead(panelNum: number) {
    const panelArray = [
      this.panel0,
      this.panel1,
      this.panel2,
      this.panel3,
      this.panel4,
      this.panel5,
      this.panel6
    ];
    this.stepService.onRead();
    if (panelNum === 6) {
      this.router.navigate(["/", "quit-guide", "step", "5"]);
    }
    panelArray[panelNum].nativeElement.expanded = false;
  }
}
