import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { JournalEntry } from '../journal-entry';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.scss']
})
export class JournalDetailComponent implements OnInit {

  entry: JournalEntry;

  constructor(private journalService: JournalService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.journalService.getEntry(params.get('id')).subscribe(e => {
        console.log(e);
        // this.entry = e;
      })
    })
  }

  journalDetailForm = new FormGroup({
    title: new FormControl(''),
    entry: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.journalDetailForm.value);
  }

}
