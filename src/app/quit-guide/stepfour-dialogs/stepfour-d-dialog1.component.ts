import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-stepfour-d-dialog1",
  template: `
    <h3 mat-dialog-title>Cravings/urges</h3>
    <mat-dialog-content>
      <p>
        Cravings and urges to smoke are the most common symptoms of nicotine
        withdrawal. But the good news &mdash; they don't last long. Most will
        pass in a minute or two, so the key is to not give in to them.
      </p>
      <p>
        Try these things to get you through the moment:
      </p>
      <ul>
        <li>Distract yourself &mdash; think about something else</li>
        <li>Remind yourself the urge will pass</li>
        <li>Call a supportive friend or family member</li>
        <li>Suck on a piece of candy</li>
        <li>
          Practice
          <a class="deep-link" (click)="goToBreathing()">Box Breathing</a>
        </li>
      </ul>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button
        mat-button
        class="full-width-field light-green-button"
        (click)="closeDialog()"
      >
        Got it!
      </button>
    </mat-dialog-actions>
    <div id="bottom-theming"></div>
  `,
  styleUrls: ["../step.component.scss"]
})
export class StepfourDDialog1Component implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<StepfourDDialog1Component>,
    private router: Router
  ) {}

  ngOnInit() {}

  goToBreathing() {
    this.closeDialog();
    this.router.navigate(["/", "quit-guide", "step", "4", "breathing"]);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
