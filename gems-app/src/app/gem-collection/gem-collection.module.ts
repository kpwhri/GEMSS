import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { GemCollectionComponent } from './gem-collection.component';
import { GemTopViewComponent } from './gem-top-view/gem-top-view.component';


@NgModule({
  declarations: [
    GemCollectionComponent,
    GemTopViewComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    GemCollectionComponent,
    GemTopViewComponent
  ]
})
export class GemCollectionModule { }
