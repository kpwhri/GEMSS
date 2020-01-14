import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-stepfour-d-dialog6",
  template: `
    <h3 mat-dialog-title>Fatigue</h3>
    <mat-dialog-content>
      <ul>
        <li>Try to get at least 8 hours sleep each night</li>
        <li>
          Go to bed and get up at the same time each morning, even on weekends
        </li>
        <li>Don't push yourself too much</li>
        <li>
          Arrange your schedule to have extra time in the mornings: no early
          morning meetings.
        </li>
        <li>Ask for help</li>
      </ul>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button
        mat-flat-button
        class="full-width-field green-button"
        (click)="closeDialog()"
      >
        Got it!
      </button>
    </mat-dialog-actions>
  `,
  styleUrls: ["../step.component.scss"]
})
export class StepfourDDialog6Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<StepfourDDialog6Component>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
