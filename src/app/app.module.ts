import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { environment } from "../environments/environment";

// import { MatExpansionModule } from "@angular/material/expansion";
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
import { MessagesComponent } from "./messages/messages.component";
import { JournalModule } from "./journal/journal.module";
import { NavigationComponent } from "./navigation/navigation.component";
import { QuitGuideModule } from "./quit-guide/quit-guide.module";
import { SharedModule } from "./shared/shared.module";
import { ToolboxModule } from './toolbox/toolbox.module';
// import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    // GemTopViewComponent,
    NavigationComponent,
    MessagesComponent,
    QuitGuideModule,
    ToolboxModule
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    JournalModule,
    // MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    QuitGuideModule,
    ReactiveFormsModule,
    SharedModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
