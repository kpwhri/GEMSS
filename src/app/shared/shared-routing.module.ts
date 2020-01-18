import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MoreHelpComponent } from "./more-help/more-help.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const sharedRoutes: Routes = [
  { path: "shared/about", component: AboutComponent },
  { path: "shared/contact", component: ContactComponent },
  { path: "shared/more-help", component: MoreHelpComponent },
  { path: "shared/welcome", component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
