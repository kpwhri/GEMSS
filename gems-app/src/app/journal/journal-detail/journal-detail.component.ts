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

  journalDetailForm = new FormGroup({
    title: new FormControl(''),
    entry: new FormControl(''),
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEntry(id);
    }
  }

  getEntry(id: string): void {
    this.journalService.getEntry(id).subscribe(
      entry => {
        this.entry = entry;
        this.journalDetailForm.setValue({
          title: this.entry.title,
          entry: this.entry.entry
        });
      }
    );
  }

  onSubmit(): void {
    // console.warn(this.journalDetailForm.value);
    this.journalService.saveEntry(this.journalDetailForm.value);
  }

}
