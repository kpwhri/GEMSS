import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';
import { MoreHelpComponent } from './more-help/more-help.component';

@NgModule({
  declarations: [WelcomeComponent, AboutComponent, ContactComponent, MoreHelpComponent],
  imports: [CommonModule, SharedRoutingModule]
})
export class SharedModule {}
