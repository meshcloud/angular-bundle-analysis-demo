import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedComponentComponent } from './my-shared-component/my-shared-component.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MySharedComponentComponent],
  exports: [MySharedComponentComponent]
})
export class SharedModule { }
