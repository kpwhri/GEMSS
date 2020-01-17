import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JournalListComponent } from "./journal/journal-list/journal-list.component";

const routes: Routes = [
  {
    path: "journal",
    loadChildren: () =>
      import("./journal/journal.module").then(mod => mod.JournalModule)
  },
  {
    path: "quit-guide",
    loadChildren: () =>
      import("./quit-guide/quit-guide.module").then(mod => mod.QuitGuideModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
