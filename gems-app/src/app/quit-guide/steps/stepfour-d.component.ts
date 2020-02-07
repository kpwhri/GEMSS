import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { StepService } from "../step.service";
import { StepfourDDialog1Component } from "../stepfour-dialogs/stepfour-d-dialog1.component";
import { StepfourDDialog2Component } from "../stepfour-dialogs/stepfour-d-dialog2.component";
import { StepfourDDialog3Component } from "../stepfour-dialogs/stepfour-d-dialog3.component";
import { StepfourDDialog4Component } from "../stepfour-dialogs/stepfour-d-dialog4.component";
import { StepfourDDialog5Component } from "../stepfour-dialogs/stepfour-d-dialog5.component";
import { StepfourDDialog6Component } from "../stepfour-dialogs/stepfour-d-dialog6.component";
import { StepfourDDialog7Component } from "../stepfour-dialogs/stepfour-d-dialog7.component";
import { StepfourDDialog8Component } from "../stepfour-dialogs/stepfour-d-dialog8.component";
import { StepfourDDialog9Component } from "../stepfour-dialogs/stepfour-d-dialog9.component";

@Component({
  selector: "app-stepfour-d",
  templateUrl: "./stepfour-d.component.html",
  styleUrls: ["../step.component.scss"]
})
export class StepfourDComponent implements OnInit {
  constructor(private stepService: StepService, public dialog: MatDialog) {}
  dialogArray = [
    StepfourDDialog1Component,
    StepfourDDialog2Component,
    StepfourDDialog3Component,
    StepfourDDialog4Component,
    StepfourDDialog5Component,
    StepfourDDialog6Component,
    StepfourDDialog7Component,
    StepfourDDialog8Component,
    StepfourDDialog9Component
  ];

  ngOnInit() {}

  openDialog(dialogNumber: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.closeOnNavigation = false;
    dialogConfig.disableClose = true;
    dialogConfig.id = "withdrawal-panel";
    this.dialog.open(this.dialogArray[dialogNumber], dialogConfig);
  }

  onRead() {
    this.stepService.onRead();
  }
}
