import { Component, OnInit, Input } from '@angular/core';
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
  @Input() entry: JournalEntry;

  constructor(private journalService: JournalService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEntry();
  }

  getEntry(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.journalService.getEntry(id)
      .subscribe(entry => this.entry = entry)
  }

  journalDetailForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.journalDetailForm.value);
  }

}
