import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuitGuideComponent } from './quit-guide/quit-guide.component';
import { JournalListComponent } from './journal-list/journal-list.component';
import { JournalDetailComponent } from './journal-detail/journal-detail.component';

const routes: Routes = [
  { path: 'quit-guide', component: QuitGuideComponent },
  { path: 'journal-list', component: JournalListComponent },
  { path: 'journal-detail/:id', component: JournalDetailComponent },
  { path: '', redirectTo: '/quit-guide', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
