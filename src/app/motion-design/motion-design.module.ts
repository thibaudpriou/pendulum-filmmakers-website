import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MotionDesignComponent } from './motion-design.component';

@NgModule({
  import : [
    SharedModule
  ],
  declarations: [
    MotionDesignComponent
  ],
  exports: [ MotionDesignComponent ]
})
export class MotionDesignModule { }