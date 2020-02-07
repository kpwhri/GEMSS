import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  pageTitle: string = "GEMS";

  constructor(private location: Location) {}

  ngOnInit() {}

  goBack() {
    this.location.back();
  }
}
