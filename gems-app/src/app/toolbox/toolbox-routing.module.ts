import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ToolboxComponent } from "./toolbox.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { LearnOthersComponent } from "./learn-others/learn-others.component";
import { TalkBackComponent } from "./talk-back/talk-back.component";
import { TrackerComponent } from "./tracker/tracker.component";

const toolboxRoutes: Routes = [
  { path: "tracker", component: TrackerComponent },
  { path: "calculator", component: CalculatorComponent },
  { path: "learn-others", component: LearnOthersComponent },
  { path: "talk-back", component: TalkBackComponent },
  { path: "", component: ToolboxComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(toolboxRoutes)],
  exports: [RouterModule]
})
export class ToolboxRoutingModule {}
