import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-stepfour-d-dialog4",
  template: `
    <h3 mat-dialog-title>Poor concentration</h3>
    <mat-dialog-content>
      <ul>
        <li>Allow yourself extra time for tasks over the next few weeks</li>
        <li>Take a brisk walk to clear your head</li>
        <li>Simplify your schedule for a few days</li>
        <li>Take lots of breaks</li>
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
export class StepfourDDialog4Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<StepfourDDialog4Component>) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
