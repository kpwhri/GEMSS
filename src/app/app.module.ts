import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuitGuideComponent } from './quit-guide/quit-guide.component';
import { GemTopViewComponent } from './gem-top-view/gem-top-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { JournalListComponent } from './journal-list/journal-list.component';
import { JournalNewComponent } from './journal-new/journal-new.component';
import { JournalImageComponent } from './journal-image/journal-image.component';

@NgModule({
  declarations: [
    AppComponent,
    QuitGuideComponent,
    GemTopViewComponent,
    NavigationComponent,
    JournalListComponent,
    JournalNewComponent,
    JournalImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
