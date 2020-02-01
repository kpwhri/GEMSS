import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-stepfour-d-dialog9",
  template: `
    <h3 mat-dialog-title>Trouble Sleeping</h3>
    <mat-dialog-content>
      <ul>
        <li>Avoid afternoon caffeine</li>
        <li>Avoid alcohol before bed</li>
        <li>
          Go to bed and get up at the same time each day, even on the weekend
        </li>
        <li>Don't read, watch TV or look at your phone or computer in bed</li>
        <li>
          Stop all screen time (TV, computers and other devices) at least 30
          minutes before bedtime
        </li>
        <li>Don't exercise right before bedtime</li>
        <li>Try an evening cup of chamomile tea</li>
      </ul>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button
        mat-flat-button
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
export class StepfourDDialog9Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<StepfourDDialog9Component>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
