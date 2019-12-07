/**
  Creates a picture of a journal with a date.
  Requires 1 argument, the journalDate, which is parsed into its month & day.
**/

import { Component, Input, OnInit } from '@angular/core';

import { JournalEntry } from '../journal-entry';

@Component({
  selector: 'app-journal-image',
  template: `
<mat-card class='journal-item' style="display: block;">
<svg xmlns="http://www.w3.org/2000/svg" width="67.966" height="72" viewBox="0 0 67.966 72">
<defs><style>.a{fill:#9a8978;}</style></defs>
<path class="a" d="M16.451,241a2.109,2.109,0,0,0,0,4.219h4.47V241Z" transform="translate(-14.342 -207.109)"/>
<path class="a" d="M16.451,67.34a2.109,2.109,0,0,0,0,4.219h4.47V67.34Z" transform="translate(-14.342 -57.87)"/>
<path class="a" d="M16.451,414.66a2.109,2.109,0,1,0,0,4.219h4.47V414.66Z" transform="translate(-14.342 -356.349)"/>
<path class="a" d="M16.571,154.17a2.109,2.109,0,0,0,0,4.219h4.454V154.17Z" transform="translate(-14.445 -132.49)"/>
<path class="a" d="M16.571,327.83a2.109,2.109,0,0,0,0,4.219h4.454V327.83Z" transform="translate(-14.445 -281.729)"/>
<path class="a" d="M394.047,211.726h-8.711a6.226,6.226,0,0,0,0,12.452h8.711a1.734,1.734,0,0,0,1.734-1.734V213.46A1.734,1.734,0,0,0,394.047,211.726Z" transform="translate(-327.815 -181.952)"/>
<path class="a" d="M61.132,7.065v2.4H65.85a2.109,2.109,0,0,1,0,4.219H61.132V21.68h4.735a2.109,2.109,0,1,1,0,4.219H61.132v7.992H65.85a2.109,2.109,0,1,1,0,4.219H61.132V46.1h4.735a2.109,2.109,0,0,1,0,4.219H61.132v7.992H65.85a2.109,2.109,0,0,1,0,4.219H61.132v2.4A7.073,7.073,0,0,0,68.2,72h4.185V0H68.2a7.073,7.073,0,0,0-7.065,7.065Z" transform="translate(-54.552 0)"/>
<path class="a" d="M196.16,36A10.457,10.457,0,0,1,206.6,25.556h6.93V2.109A2.11,2.11,0,0,0,211.425,0H171.132V72h40.293a2.11,2.11,0,0,0,2.109-2.109V46.444H206.6A10.457,10.457,0,0,1,196.16,36Z" transform="translate(-149.083 0)"/>
<text x="28" y="19">
  {{ journalDate | date:"LLL" | uppercase }}
</text>
<text x="38" y="65">
  {{ journalDate | date:"d" }}
</text>
</svg>
<span class='journal-item-text'>
<mat-card-title>{{ journalTitle }}</mat-card-title>
<mat-card-subtitle>{{ journalEntry | slice:0:50 }}&hellip;</mat-card-subtitle>
</span>
</mat-card>
  `,
  styles: [
            '.journal-item { margin: 10px; padding: 10px; border: solid 1px black; border-radius: 9px; };',
            'svg { float: left; margin-right: 10px; }',
            'text { color: white };'
          ]
})
export class JournalImageComponent implements OnInit {

  @Input() journalDate: Date;
  @Input() journalTitle: string;
  @Input() journalEntry: string;

  constructor() { }

  ngOnInit() {

  }

}


// COLOR IS NOT WORKING FOR THE SVG TEXT
