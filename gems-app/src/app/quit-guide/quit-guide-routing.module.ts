import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QuitGuideComponent } from "./quit-guide.component";
import { SteponeComponent } from "./steps/stepone.component";
import { SteponeAComponent } from "./steps/stepone-a.component";
import { SteponeBComponent } from "./steps/stepone-b.component";
import { SteponeCComponent } from "./steps/stepone-c.component";
import { SteponeDComponent } from "./steps/stepone-d.component";
import { SteponeEComponent } from "./steps/stepone-e.component";
import { SteponeFComponent } from "./steps/stepone-f.component";
import { SteponeGComponent } from "./steps/stepone-g.component";
import { SteponeHComponent } from "./steps/stepone-h.component";
import { SteponeIComponent } from "./steps/stepone-i.component";
import { SteponeJComponent } from "./steps/stepone-j.component";
import { SteponeKComponent } from "./steps/stepone-k.component";
import { SteponeLComponent } from "./steps/stepone-l.component";
import { SteptwoComponent } from "./steps/steptwo.component";
import { SteptwoAComponent } from "./steps/steptwo-a.component";
import { SteptwoBComponent } from "./steps/steptwo-b.component";
import { SteptwoCComponent } from "./steps/steptwo-c.component";
import { StepthreeComponent } from "./steps/stepthree.component";
import { StepfourComponent } from "./steps/stepfour.component";
import { StepfourAComponent } from "./steps/stepfour-a.component";
import { StepfourBComponent } from "./steps/stepfour-b.component";
import { StepfourCComponent } from "./steps/stepfour-c.component";
import { StepfourDComponent } from "./steps/stepfour-d.component";
import { StepfourEComponent } from "./steps/stepfour-e.component";
import { StepfourDBreathingComponent } from "./stepfour-dialogs/stepfour-d-breathing.component";
import { StepfiveComponent } from "./steps/stepfive.component";
import { StepsixComponent } from "./steps/stepsix.component";

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
  { path: "quit-guide/step/5", component: StepfiveComponent },
  { path: "quit-guide/step/6", component: StepsixComponent },
  { path: "", component: QuitGuideComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(quitGuideRoutes)],
  exports: [RouterModule]
})
export class QuitGuideRoutingModule {}
