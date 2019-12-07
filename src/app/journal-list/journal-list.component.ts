import { Component, OnInit } from '@angular/core';

import { JournalEntry } from '../journal-entry';
import { ENTRIES } from '../journal-entry-mock';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss']
})
export class JournalListComponent implements OnInit {

  pageTitle: string = "Journal";
  entries: JournalEntry[] = ENTRIES;

  constructor() { }

  ngOnInit() {
  }

}
