import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { LazyRoutingModule } from './lazy-routing.module';
import { MyLazyComponent } from './my-lazy/my-lazy.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
    NgbTooltipModule
  ],
  declarations: [MyLazyComponent]
})
export class LazyModule { }
