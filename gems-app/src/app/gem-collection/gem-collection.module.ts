import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { GemCollectionComponent } from './gem-collection.component';


@NgModule({
  declarations: [GemCollectionComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    GemCollectionComponent
  ]
})
export class GemCollectionModule { }
