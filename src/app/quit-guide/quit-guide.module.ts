import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";

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
import { QuitGuideRoutingModule } from "./quit-guide-routing.module";

@NgModule({
  imports: [MatCardModule, MatExpansionModule, QuitGuideRoutingModule],
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
    StepfourComponent
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
    StepfourComponent
  ]
})
export class QuitGuideModule {}
