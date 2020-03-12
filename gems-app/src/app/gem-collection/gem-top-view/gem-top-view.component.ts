/**
 *  Creates a top view of a diamond that requires 2 arguments:
 *  gemType: Name of the desired gem (associated with predefined colors)
 *  gemSize: Typical small or Gem Collection large
 *
 *  Original design has both top-view & side-view gems - to be done
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gem-top-view',
  templateUrl: './gem-top-view.component.html',
  styleUrls: ['./gem-top-view.component.scss']
})
export class GemTopViewComponent implements OnInit {
  @Input() gemType: string;
  @Input() gemSize: string;

  colorTop: string;
  colorBottom: string;

  define_gem_characteristics(gemType: string) {
    if (this.gemType === 'novice') {
      this.colorTop = "#57a635";
      this.colorBottom = "#2c531b";
    } else if (this.gemType === 'explorer') {
      this.colorTop = "#20a29e";
      this.colorBottom = "#10514f";
    } else if (this.gemType === 'adventurer') {
      this.colorTop = "#f05674";
      this.colorBottom = "#782b3a";
    } else if (this.gemType === 'champion') {
      this.colorTop = "#583985";
      this.colorBottom = "#2c1d43";
    } else if (this.gemType === 'star') {
      this.colorTop = "#92ccf0";
      this.colorBottom = "#496678";
    } else if (this.gemType === 'master') {
      this.colorTop = "#0078b3";
      this.colorBottom = "#003c5a";
    } else if (this.gemType === 'tracker') {
      this.colorTop = "#F36C0D";
      this.colorBottom = "#003c5a";
    } else if (this.gemType === 'savvy-saver') {
      this.colorTop = "#A4D751";
      this.colorBottom = "#7FA149";
    } else if (this.gemType === 'excuse-expert') {
      this.colorTop = "#B2A8D2";
      this.colorBottom = "#595469";
    } else if (this.gemType === 'motivational-mentee') {
      this.colorTop = "#FEC941";
      this.colorBottom = "#7F6521";
    }
  }

  constructor() { }

  ngOnInit() {
    this.define_gem_characteristics(this.gemType);
  }

}
