import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { QuitGuideComponent } from "./quit-guide.component";
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
import { SteponeComponent } from "./stepone.component";
import { SteptwoComponent } from "./steptwo.component";
import { SteptwoAComponent } from "./steptwo-a.component";
import { SteptwoBComponent } from "./steptwo-b.component";
import { SteptwoCComponent } from "./steptwo-c.component";
import { StepthreeComponent } from "./stepthree.component";
import { StepfourComponent } from "./stepfour.component";

const routes: Routes = [
  { path: "quit-guide", component: QuitGuideComponent },
  { path: "quit-guide/step/1", component: SteponeComponent },
  { path: "quit-guide/step/1/a", component: SteponeAComponent },
  { path: "quit-guide/step/1/b", component: SteponeBComponent },
  { path: "quit-guide/step/1/c", component: SteponeCComponent },
  { path: "quit-guide/step/1/d", component: SteponeDComponent },
  { path: "quit-guide/step/1/e", component: SteponeEComponent },
  { path: "quit-guide/step/1/f", component: SteponeFComponent },
  { path: "step/1/g", component: SteponeGComponent },
  { path: "step/1/h", component: SteponeHComponent },
  { path: "step/1/i", component: SteponeIComponent },
  { path: "step/1/j", component: SteponeJComponent },
  { path: "step/1/k", component: SteponeKComponent },
  { path: "step/1/l", component: SteponeLComponent },
  { path: "step/1", component: SteponeComponent },
  { path: "step/2", component: SteptwoComponent },
  { path: "step/2/a", component: SteptwoAComponent },
  { path: "step/2/b", component: SteptwoBComponent },
  { path: "step/2/c", component: SteptwoCComponent },
  { path: "step/3", component: StepthreeComponent },
  { path: "step/4", component: StepfourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuitGuideRoutingModule {}
