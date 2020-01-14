import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";

import { GemTopViewComponent } from "../gem-top-view/gem-top-view.component";
import { QuitGuideComponent } from "./quit-guide.component";
import { SteponeComponent } from "./stepone.component";
import { SteponeAComponent } from "./stepone-a.component";
import { SteponeBComponent } from "./stepone-b.component";
import { SteponeCComponent } from "./stepone-c.component";
import { SteponeDComponent } from "./stepone-d.component";
import { SteponeEComponent } from "./stepone-e.component";
import { SteponeFComponent } from "./stepone-f.component";
import { SteponeGComponent } from "./stepone-g.component";
import { SteponeHComponent } from "./stepone-h.component";
import { SteponeIComponent } from "./stepone-i.component";
import { SteponeJComponent } from "./stepone-j.component";
import { SteponeKComponent } from "./stepone-k.component";
import { SteponeLComponent } from "./stepone-l.component";
import { SteptwoComponent } from "./steptwo.component";
import { SteptwoAComponent } from "./steptwo-a.component";
import { SteptwoBComponent } from "./steptwo-b.component";
import { SteptwoCComponent } from "./steptwo-c.component";
import { StepthreeComponent } from "./stepthree.component";
import { StepfourComponent } from "./stepfour.component";
import { StepfourAComponent } from "./stepfour-a.component";
import { StepfourBComponent } from "./stepfour-b.component";
import { StepfourCComponent } from "./stepfour-c.component";
import { StepfourDComponent } from "./stepfour-d.component";
import { StepfourDDialog1Component } from "./stepfour-dialogs/stepfour-d-dialog1.component";
import { StepfourDDialog2Component } from "./stepfour-dialogs/stepfour-d-dialog2.component";
import { StepfourDDialog3Component } from "./stepfour-dialogs/stepfour-d-dialog3.component";
import { StepfourDDialog4Component } from "./stepfour-dialogs/stepfour-d-dialog4.component";
import { StepfourDDialog5Component } from "./stepfour-dialogs/stepfour-d-dialog5.component";
import { StepfourDDialog6Component } from "./stepfour-dialogs/stepfour-d-dialog6.component";
import { StepfourDDialog7Component } from "./stepfour-dialogs/stepfour-d-dialog7.component";
import { StepfourDDialog8Component } from "./stepfour-dialogs/stepfour-d-dialog8.component";
import { StepfourDDialog9Component } from "./stepfour-dialogs/stepfour-d-dialog9.component";
import { StepfourDBreathingComponent } from "./stepfour-dialogs/stepfour-d-breathing.component";
import { StepfourEComponent } from "./stepfour-e.component";
import { QuitGuideRoutingModule } from "./quit-guide-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    QuitGuideRoutingModule
  ],
  declarations: [
    QuitGuideComponent,
    GemTopViewComponent,
    SteponeComponent,
    SteponeAComponent,
    SteponeBComponent,
    SteponeCComponent,
    SteponeDComponent,
    SteponeEComponent,
    SteponeFComponent,
    SteponeGComponent,
    SteponeHComponent,
    SteponeIComponent,
    SteponeJComponent,
    SteponeKComponent,
    SteponeLComponent,
    SteptwoComponent,
    SteptwoAComponent,
    SteptwoBComponent,
    SteptwoCComponent,
    StepthreeComponent,
    StepfourComponent,
    StepfourAComponent,
    StepfourBComponent,
    StepfourCComponent,
    StepfourDComponent,
    StepfourDDialog1Component,
    StepfourDDialog2Component,
    StepfourDDialog3Component,
    StepfourDDialog4Component,
    StepfourDDialog5Component,
    StepfourDDialog6Component,
    StepfourDDialog7Component,
    StepfourDDialog8Component,
    StepfourDDialog9Component,
    StepfourDBreathingComponent,
    StepfourEComponent
  ],
  exports: [
    MatCardModule,
    QuitGuideComponent,
    GemTopViewComponent,
    SteponeComponent,
    SteponeAComponent,
    SteponeBComponent,
    SteponeCComponent,
    SteponeDComponent,
    SteponeEComponent,
    SteponeFComponent,
    SteponeGComponent,
    SteponeHComponent,
    SteponeIComponent,
    SteponeJComponent,
    SteponeKComponent,
    SteponeLComponent,
    SteptwoComponent,
    SteptwoAComponent,
    SteptwoBComponent,
    SteptwoCComponent,
    StepthreeComponent,
    StepfourComponent,
    StepfourAComponent,
    StepfourBComponent,
    StepfourCComponent,
    StepfourDComponent,
    StepfourEComponent
    // StepfourDBreathingComponent,
  ],
  entryComponents: [
    StepfourDDialog1Component,
    StepfourDDialog2Component,
    StepfourDDialog3Component,
    StepfourDDialog4Component,
    StepfourDDialog5Component,
    StepfourDDialog6Component,
    StepfourDDialog7Component,
    StepfourDDialog8Component,
    StepfourDDialog9Component
  ]
})
export class QuitGuideModule {}
