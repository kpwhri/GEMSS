import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";

import { ToolboxRoutingModule } from "./toolbox-routing.module";
import { ToolboxComponent } from "./toolbox.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { LearnOthersComponent } from "./learn-others/learn-others.component";
import { TalkBackComponent } from "./talk-back/talk-back.component";
import { TrackerComponent } from "./tracker/tracker.component";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [
    ToolboxComponent,
    TrackerComponent,
    CalculatorComponent,
    LearnOthersComponent,
    TalkBackComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule,
    ToolboxRoutingModule
  ]
})
export class ToolboxModule {}
