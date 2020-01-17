import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { environment } from "../environments/environment";

import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemDataService } from "./in-mem-data.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { GemTopViewComponent } from "./gem-top-view/gem-top-view.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { JournalListComponent } from "./journal-list/journal-list.component";
import { JournalDetailComponent } from "./journal-detail/journal-detail.component";
import { JournalImageComponent } from "./journal-image/journal-image.component";
import { MessagesComponent } from "./messages/messages.component";
import { QuitGuideModule } from "./quit-guide/quit-guide.module";

@NgModule({
  declarations: [
    AppComponent,
    // GemTopViewComponent,
    JournalListComponent,
    JournalDetailComponent,
    JournalImageComponent,
    NavigationComponent,
    MessagesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    QuitGuideModule,
    ReactiveFormsModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
