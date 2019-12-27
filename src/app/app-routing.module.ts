import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuitGuideComponent } from './quit-guide/quit-guide.component';
import { SteponeComponent } from './steps/stepone.component';
import { SteponeAComponent } from './steps/stepone-a.component';
import { SteponeBComponent } from './steps/stepone-b.component';
import { SteponeCComponent } from './steps/stepone-c.component';
import { SteponeDComponent } from './steps/stepone-d.component';
import { SteptwoComponent } from './steps/steptwo.component';
import { JournalListComponent } from './journal-list/journal-list.component';
import { JournalDetailComponent } from './journal-detail/journal-detail.component';

const routes: Routes = [
  { path: 'quit-guide', component: QuitGuideComponent },
  { path: 'step/1/a', component: SteponeAComponent },
  { path: 'step/1/b', component: SteponeBComponent },
  { path: 'step/1/c', component: SteponeCComponent },
  { path: 'step/1/d', component: SteponeDComponent },
  { path: 'step/1', component: SteponeComponent },
  { path: 'step/2', component: SteptwoComponent },
  { path: 'journal-list', component: JournalListComponent },
  { path: 'journal-detail/:id', component: JournalDetailComponent },
  { path: 'journal-detail', component: JournalDetailComponent },
  { path: '', redirectTo: '/quit-guide', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
