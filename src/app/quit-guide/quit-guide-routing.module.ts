import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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
import { StepfourEComponent } from "./stepfour-e.component";
import { StepfourDBreathingComponent } from "./stepfour-dialogs/stepfour-d-breathing.component";

const quitGuideRoutes: Routes = [
  { path: "quit-guide/step/1/a", component: SteponeAComponent },
  { path: "quit-guide/step/1/b", component: SteponeBComponent },
  { path: "quit-guide/step/1/c", component: SteponeCComponent },
  { path: "quit-guide/step/1/d", component: SteponeDComponent },
  { path: "quit-guide/step/1/e", component: SteponeEComponent },
  { path: "quit-guide/step/1/f", component: SteponeFComponent },
  { path: "quit-guide/step/1/g", component: SteponeGComponent },
  { path: "quit-guide/step/1/h", component: SteponeHComponent },
  { path: "quit-guide/step/1/i", component: SteponeIComponent },
  { path: "quit-guide/step/1/j", component: SteponeJComponent },
  { path: "quit-guide/step/1/k", component: SteponeKComponent },
  { path: "quit-guide/step/1/l", component: SteponeLComponent },
  { path: "quit-guide/step/1", component: SteponeComponent, pathMatch: "full" },
  { path: "quit-guide/step/2/a", component: SteptwoAComponent },
  { path: "quit-guide/step/2/b", component: SteptwoBComponent },
  { path: "quit-guide/step/2/c", component: SteptwoCComponent },
  { path: "quit-guide/step/2", component: SteptwoComponent, pathMatch: "full" },
  { path: "quit-guide/step/3", component: StepthreeComponent },
  { path: "quit-guide/step/4/a", component: StepfourAComponent },
  { path: "quit-guide/step/4/b", component: StepfourBComponent },
  { path: "quit-guide/step/4/c", component: StepfourCComponent },
  { path: "quit-guide/step/4/d", component: StepfourDComponent },
  { path: "quit-guide/step/4/e", component: StepfourEComponent },
  {
    path: "quit-guide/step/4/breathing",
    component: StepfourDBreathingComponent
  },
  {
    path: "quit-guide/step/4",
    component: StepfourComponent,
    pathMatch: "full"
  },
  { path: "", component: QuitGuideComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(quitGuideRoutes)],
  exports: [RouterModule]
})
export class QuitGuideRoutingModule {}
