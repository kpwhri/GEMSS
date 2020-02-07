import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepfour-a",
  templateUrl: "./stepfour-a.component.html",
  styleUrls: ["../step.component.scss"]
})
export class StepfourAComponent implements OnInit {
  @ViewChild("panel0") panel0: ElementRef;
  @ViewChild("panel1") panel1: ElementRef;
  @ViewChild("panel2") panel2: ElementRef;
  @ViewChild("panel3") panel3: ElementRef;
  @ViewChild("panel4") panel4: ElementRef;
  @ViewChild("panel5") panel5: ElementRef;
  @ViewChild("panel6") panel6: ElementRef;
  @ViewChild("panel7") panel7: ElementRef;

  constructor(private stepService: StepService, private el: ElementRef) {}

  ngOnInit() {}

  flipContainer(panelNum: number) {
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
    panel.classList.toggle("flipped");
  }

  onRead() {
    this.stepService.onRead();
  }
}
