import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  template: `
    <div>
      <img id='sweet-gem' src="assets/sweet-gem.png" />
    </div>
    <h2>About GEMS</h2>
    <p>
      GEMS is designed to help you cut back or quit smoking, when you are ready.
    </p>
    <p>
      To use this program, follow the step-by-step GEMS How to Quit guide and
      the other tools in your GEMS Toolkit
    </p>
    <p>
      GEMS was developed by experts at the Kaiser Permanente Washington Health
      Research Institute. It is only available to members of the GEMS study.
      Your use of this program is confidential, as provided by law.
    </p>
  `,
  styleUrls: ["../shared.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
