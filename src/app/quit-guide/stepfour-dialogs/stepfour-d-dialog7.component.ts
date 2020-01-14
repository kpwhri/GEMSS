import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-stepfour-d-dialog7",
  template: `
    <h3 mat-dialog-title>Constipation</h3>
    <mat-dialog-content>
      <ul>
        <li>Drink plenty of fluids</li>
        <li>Take a probiotic or eat yogurt</li>
        <li>Eat food that's high in fiber</li>
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
export class StepfourDDialog7Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<StepfourDDialog7Component>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
