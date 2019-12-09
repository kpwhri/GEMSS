import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuitGuideComponent } from './quit-guide/quit-guide.component';
import { JournalListComponent } from './journal-list/journal-list.component';
import { JournalNewComponent } from './journal-new/journal-new.component';

const routes: Routes = [
  { path: 'quit-guide', component: QuitGuideComponent },
  { path: 'journal-list', component: JournalListComponent },
  { path: 'journal-new', component: JournalNewComponent },
  { path: '', redirectTo: '/quit-guide', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
