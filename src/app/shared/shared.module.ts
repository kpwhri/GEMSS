import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { WelcomeComponent } from "./welcome.component";

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, SharedRoutingModule]
})
export class SharedModule {}
