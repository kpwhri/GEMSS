import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from "@angular/material/list";
import { MatNativeDateModule } from "@angular/material/core";

import { ChartsModule } from 'ng2-charts';

import { ToolboxRoutingModule } from "./toolbox-routing.module";
import { ToolboxComponent } from "./toolbox.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { LearnOthersComponent } from "./learn-others/learn-others.component";
import { TalkBackComponent } from "./talk-back/talk-back.component";
import { TrackerComponent } from "./tracker/tracker.component";

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
    ReactiveFormsModule,
    ChartsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    ToolboxRoutingModule
  ]
})
export class ToolboxModule { }
