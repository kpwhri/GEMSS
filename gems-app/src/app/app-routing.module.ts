import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { JournalListComponent } from "./journal/journal-list/journal-list.component";
import { GemCollectionComponent } from "./gem-collection/gem-collection.component";

const routes: Routes = [
  { path: 'gem-collection', component: GemCollectionComponent },
  {
    path: "journal",
    loadChildren: () =>
      import("./journal/journal.module").then(mod => mod.JournalModule)
  },
  {
    path: "quit-guide",
    loadChildren: () =>
      import("./quit-guide/quit-guide.module").then(mod => mod.QuitGuideModule)
  },
  {
    path: "shared",
    loadChildren: () =>
      import("./shared/shared.module").then(m => m.SharedModule)
  },
  {
    path: "toolbox",
    loadChildren: () =>
      import("./toolbox/toolbox.module").then(m => m.ToolboxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
