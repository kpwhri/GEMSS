import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-stepfour-d-dialog3",
  template: `
    <h3 mat-dialog-title>Hunger</h3>
    <mat-dialog-content>
      <ul>
        <li>Snack on fresh fruits or vegetables</li>
        <li>Chew on some gum</li>
        <li>Drink water or low-calorie drinks</li>
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
export class StepfourDDialog3Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<StepfourDDialog3Component>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
