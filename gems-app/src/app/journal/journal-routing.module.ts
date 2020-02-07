import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { JournalListComponent } from "./journal-list/journal-list.component";
import { JournalDetailComponent } from "./journal-detail/journal-detail.component";

const journalRoutes: Routes = [
  { path: "journal/list", component: JournalListComponent },
  { path: "journal/detail/:id", component: JournalDetailComponent },
  {
    path: "journal/detail",
    component: JournalDetailComponent,
    pathMatch: "full"
  },
  { path: "journal", component: JournalListComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(journalRoutes)],
  exports: [RouterModule]
})
export class JournalRoutingModule {}
