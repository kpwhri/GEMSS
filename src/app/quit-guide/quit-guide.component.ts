import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quit-guide',
  templateUrl: './quit-guide.component.html',
  styleUrls: ['./quit-guide.component.scss']
})
export class QuitGuideComponent implements OnInit {

  diamondColorTop: string = '#008ed4';
  diamondColorBottom: string = '#005d8b';

  constructor() { }

  ngOnInit() {
  }

}
