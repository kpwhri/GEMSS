import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-stepfour-d-dialog5",
  template: `
    <h3 mat-dialog-title>Sadness</h3>
    <mat-dialog-content>
      <ul>
        <li>Schedule things you enjoy</li>
        <li>Talk to a supportive friend or family member</li>
        <li>
          Be kind to yourself &mdash; remind yourself that you will get through
          this
        </li>
        <li>Reward yourself &mdash; spend your cigarette money on a treat</li>
        <li>Get plenty of rest</li>
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
export class StepfourDDialog5Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<StepfourDDialog5Component>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
