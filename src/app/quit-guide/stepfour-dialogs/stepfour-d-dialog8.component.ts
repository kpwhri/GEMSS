import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-stepfour-d-dialog8",
  template: `
    <h3 mat-dialog-title>Headache</h3>
    <mat-dialog-content>
      <ul>
        <li>Try an over-the-counter pain medicine</li>
        <li>Try a cold compress</li>
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
export class StepfourDDialog8Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<StepfourDDialog8Component>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
