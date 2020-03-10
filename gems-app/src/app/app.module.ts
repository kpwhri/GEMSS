import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// import { environment } from "../environments/environment";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

// import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
// import { InMemDataService } from "./in-mem-data.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MessagesComponent } from "./messages/messages.component";
import { JournalModule } from "./journal/journal.module";
import { NavigationComponent } from "./navigation/navigation.component";
import { QuitGuideModule } from "./quit-guide/quit-guide.module";
import { SharedModule } from "./shared/shared.module";
import { ToolboxModule } from "./toolbox/toolbox.module";
import { GemCollectionModule } from './gem-collection/gem-collection.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MessagesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GemCollectionModule,
    HttpClientModule,
    JournalModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    QuitGuideModule,
    ReactiveFormsModule,
    SharedModule,
    ToolboxModule
    // environment.production
    //   ? []
    //   : HttpClientInMemoryWebApiModule.forRoot(InMemDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
