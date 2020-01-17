import { Component, OnInit } from '@angular/core';

import { JournalEntry } from '../journal-entry';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss']
})
export class JournalListComponent implements OnInit {

  pageTitle: string = "Journal";
  entries: JournalEntry[] = [];

  constructor(public journalService: JournalService) { }

  ngOnInit() {
    this.journalService.getEntries()
      .subscribe(entries => {
        this.entries = entries;
      })
  }
}
