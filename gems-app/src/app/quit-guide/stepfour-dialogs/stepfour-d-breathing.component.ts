import { Component, OnInit } from "@angular/core";

import { StepService } from "../step.service";

@Component({
  selector: "app-stepfour-d-breathing",
  template: `
    <h3>Box Breathing</h3>
    <p>Box breathing picture</p>
    <p>
      Box breathing is a simple trick you can use anytime to reduce stress,
      improve concentration and relieve craving to smoke.
    </p>
    <p>
      It's called Box Breathing (or sometimes four-square breathing) because
      there are four steps, just like the sides of a box.
    </p>
    <p>Here are the steps:</p>
    <ul>
      <li>Slowly inhale to a count of four. Completely fill your lungs.</li>
      <li>Hold your breath for another 4 counts.</li>
      <li>Slowly exhale to a count of four.</li>
      <li>Hold your breath for another 4 counts.</li>
    </ul>
    <p>
      Do this three or four times in a row, several times a day or any time you
      feel stressed or crave a cigarette.
    </p>
    <p>
      Box breathing is used by Navy Seals to help them focus and manage stress,
      so you know it can help you, too.
    </p>
    <div>
      <button mat-flat-button class="full-width-field" (click)="onRead()">
        Got it
      </button>
    </div>
  `,
  styleUrls: ["../step.component.scss"]
})
export class StepfourDBreathingComponent implements OnInit {
  constructor(private stepService: StepService) {}

  ngOnInit() {}

  onRead() {
    this.stepService.onRead();
  }
}
