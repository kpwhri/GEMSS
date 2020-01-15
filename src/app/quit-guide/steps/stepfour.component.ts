import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepfour",
  templateUrl: "./stepfour.component.html",
  styleUrls: ["../step.component.scss"]
})
export class StepfourComponent implements OnInit {
  @ViewChild("panel0", { static: false }) panel0: ElementRef;
  @ViewChild("panel1", { static: false }) panel1: ElementRef;
  @ViewChild("panel2", { static: false }) panel2: ElementRef;
  @ViewChild("panel3", { static: false }) panel3: ElementRef;
  @ViewChild("panel4", { static: false }) panel4: ElementRef;
  @ViewChild("panel5", { static: false }) panel5: ElementRef;
  @ViewChild("panel6", { static: false }) panel6: ElementRef;
  @ViewChild("panel7", { static: false }) panel7: ElementRef;

  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead(panelNum: number) {
    const panelArray = [
      this.panel0,
      this.panel1,
      this.panel2,
      this.panel3,
      this.panel4,
      this.panel5,
      this.panel6,
      this.panel7
    ];
    const panel = panelArray[panelNum].nativeElement;
    console.log(panelArray[panelNum]);
    console.log(panelArray[panelNum].nativeElement);
    // panel.close();

    this.stepService.onRead();
  }
}
