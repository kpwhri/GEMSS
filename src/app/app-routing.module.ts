import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuitGuideComponent } from './quit-guide/quit-guide.component';
import { SteponeComponent } from './steps/stepone.component';
import { SteponeAComponent } from './steps/stepone-a.component';
import { SteponeBComponent } from './steps/stepone-b.component';
import { SteponeCComponent } from './steps/stepone-c.component';
import { SteponeDComponent } from './steps/stepone-d.component';
import { SteponeEComponent } from './steps/stepone-e.component';
import { SteponeFComponent } from './steps/stepone-f.component';
import { SteponeGComponent } from './steps/stepone-g.component';
import { SteponeHComponent } from './steps/stepone-h.component';
import { SteponeIComponent } from './steps/stepone-i.component';
import { SteponeJComponent } from './steps/stepone-j.component';
import { SteponeKComponent } from './steps/stepone-k.component';
import { SteponeLComponent } from './steps/stepone-l.component';
import { SteptwoComponent } from './steps/steptwo.component';
import { SteptwoAComponent } from './steps/steptwo-a.component';
import { SteptwoBComponent } from './steps/steptwo-b.component';
import { SteptwoCComponent } from './steps/steptwo-c.component';
import { StepthreeComponent } from './steps/stepthree.component';
import { StepfourComponent } from './steps/stepfour.component';
import { JournalListComponent } from './journal-list/journal-list.component';
import { JournalDetailComponent } from './journal-detail/journal-detail.component';

const routes: Routes = [
  { path: 'quit-guide', component: QuitGuideComponent },
  { path: 'step/1/a', component: SteponeAComponent },
  { path: 'step/1/b', component: SteponeBComponent },
  { path: 'step/1/c', component: SteponeCComponent },
  { path: 'step/1/d', component: SteponeDComponent },
  { path: 'step/1/e', component: SteponeEComponent },
  { path: 'step/1/f', component: SteponeFComponent },
  { path: 'step/1/g', component: SteponeGComponent },
  { path: 'step/1/h', component: SteponeHComponent },
  { path: 'step/1/i', component: SteponeIComponent },
  { path: 'step/1/j', component: SteponeJComponent },
  { path: 'step/1/k', component: SteponeKComponent },
  { path: 'step/1/l', component: SteponeLComponent },
  { path: 'step/1', component: SteponeComponent },
  { path: 'step/2', component: SteptwoComponent },
  { path: 'step/2/a', component: SteptwoAComponent },
  { path: 'step/2/b', component: SteptwoBComponent },
  { path: 'step/2/c', component: SteptwoCComponent },
  { path: 'step/3', component: StepthreeComponent },
  { path: 'step/4', component: StepfourComponent },
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
