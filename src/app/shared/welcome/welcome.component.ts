import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  template: `
    <h2>Welcome!</h2>
    <p>
      This program is designed to help you quit smoking,
      <i>when you are ready</i>.
    </p>
    <p>
      Welcome! This program is designed to help you quit smoking, when you are
      ready. Don’t worry—we won’t ask you to give up your cigarettes, but if you
      do decide to cut-back or quit, GEMS can help.
    </p>
    <p>
      Follow the GEMS’ six-step guide to get started. After you review each step
      or use one of the tools in your GEMS tool box <span>toolbox pic</span>,
      you will be handsomely rewarded with a new &ldquo;gem&rdquo;
      <span>gem pic</span>
      for your collection. But the real reward is that you will learn some
      important skills to help you take control of your smoking.
    </p>
    <div>
      <button mat-flat-button class="full-width-field" routerLink="/quit-guide">
        Start now!
      </button>
    </div>
  `,
  styleUrls: ["../shared.component.scss"]
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
