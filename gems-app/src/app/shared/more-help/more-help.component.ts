import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-more-help",
  template: `
    <img src="assets/more-help.png" />
    <div class="centered">
      <h3>Ready to stop smoking?</h3>
      <p>
        Call <b>1-800-QUIT-NOW</b><br />
        (1-800-784-8669)<br />
        to get help from trained experts.<br />
        It's free! <br />
        &mdash;or&mdash<br />
        Talk to your doctor or medical insurance <br />
        provider to learn about your other <br />
        treatment options.
      </p>
      <p>
        (This shouldn't always display, btw)
        <span class="new-text">NEW!</span><br />
        You've earned a 2 week trial of NRT<br />
        patches. You can request this when you <br />
        are ready to quit smoking, if you are still <br />
        enrolled in GEMS. To learn more call<br />
        {{ contactPhoneNumber }}
      </p>
    </div>
  `,
  styleUrls: ["../shared.component.scss"]
})
export class MoreHelpComponent implements OnInit {
  constructor() {}
  contactPhoneNumber = "1-800-FAKE-NUMBER";

  ngOnInit() {}
}
