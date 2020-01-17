import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { JournalRoutingModule } from "./journal-routing.module";
import { JournalImageComponent } from "./journal-image/journal-image.component";
import { JournalDetailComponent } from "./journal-detail/journal-detail.component";
import { JournalListComponent } from "./journal-list/journal-list.component";

@NgModule({
  declarations: [
    JournalDetailComponent,
    JournalImageComponent,
    JournalListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    JournalRoutingModule,
    ReactiveFormsModule
  ],
  exports: [MatCardModule]
})
export class JournalModule {}
