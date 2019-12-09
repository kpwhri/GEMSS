import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { JournalEntry } from '../journal-entry';

@Component({
  selector: 'app-journal-new',
  templateUrl: './journal-new.component.html',
  styleUrls: ['./journal-new.component.scss']
})
export class JournalNewComponent implements OnInit {

  journalNewForm = new FormGroup({
    title: new FormControl(''),
    entry: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.journalNewForm.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
