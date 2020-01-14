import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-stepfour-d-dialog2",
  template: `
    <h3 mat-dialog-title>Irritability</h3>
    <mat-dialog-content>
      <ul>
        <li>Do something you enjoy</li>
        <li>Think about all the reasons quitting smoking is good for you</li>
        <li>Soak in a long bath or take a long, hot shower</li>
        <li>Get plenty of rest</li>
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
export class StepfourDDialog2Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<StepfourDDialog2Component>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
