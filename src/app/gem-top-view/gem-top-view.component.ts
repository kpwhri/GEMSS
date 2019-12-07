/**
  Creates a top view of a diamond that requires 3 arguments:
    colorTop: first color
    colorBottom: second color
    gemId: unique identifier for specific gem -
      required to ensure colors map to proper gem
**/

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gem-top-view',
  template: `
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      width="22.05" height="24.625" viewBox="0 0 22.05 24.625">
      <defs>
        <style>.gem-{{ gemId }}{fill:url(#gem-{{ gemId }});}</style>
        <radialGradient id="gem-{{ gemId }}" cx="0.5" cy="0.5" r="0.5"
           gradientUnits="objectBoundingBox">
          <stop offset="0" attr.stop-color="{{ colorTop }}"/>
          <stop offset="1" attr.stop-color="{{ colorBottom }}"/>
        </radialGradient>
      </defs>
      <path attr.class="gem-{{ gemId }}" d="M18.284,7.654l5.939-3.429V0l-9.6,5.541Zm0,0"
        transform="translate(-13.922 0)"/>
      <path attr.class="gem-{{ gemId }}" d="M3.639,150.477V143.62L0,141.519v11.059Zm0,0"
        transform="translate(0 -134.713)"/>
      <path attr.class="gem-{{ gemId }}" d="M117.634,117.343l-5.939-3.429-5.938,3.429V124.2l5.938,3.429,5.939-3.429Zm0,0"
        transform="translate(-100.671 -108.435)"/>
      <path attr.class="gem-{{ gemId }}" d="M244.277,0V4.225l5.938,3.429,3.659-2.113Zm0,0"
        transform="translate(-232.528)"/>
      <path attr.class="gem-{{ gemId }}" d="M382.8,143.62v6.857l3.639,2.1V141.519Zm0,0"
        transform="translate(-364.386 -134.712)"/>
      <path attr.class="gem-{{ gemId }}" d="M25.03,357.268l-5.939-3.428-3.618,2.089,9.557,5.518Zm0,0"
        transform="translate(-14.728 -336.822)"/>
      <path attr.class="gem-{{ gemId }}" d="M250.215,353.84l-5.938,3.428v4.178l9.557-5.518Zm0,0"
        transform="translate(-232.528 -336.822)"/>
    </svg>
  </div>
  `
})
export class GemTopViewComponent implements OnInit {
  @Input() colorTop: string;
  @Input() colorBottom: string;
  @Input() gemId: string;

  constructor() { }

  ngOnInit() {
  }

}
