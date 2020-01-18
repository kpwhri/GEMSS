import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <p>
      material-contact-mail icon
    </p>
    <h3>Contact</h3>
    <p>
      Questions about the GEMS study can be sent to {{ contactEmail }} or call
      {{ contactPhoneNumber }}.
    </p>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  constructor() {}
  contactEmail: string = "STUDYNAME@kp.org";
  contactPhoneNumber: string = "1-800-FAKE-NUMBER";

  ngOnInit() {}
}
