import { NgModule } from '@angular/core';

import { MotionDesignComponent } from './motion-design.component';

@NgModule({
  declarations: [
    MotionDesignComponent
  ],
  exports: [ MotionDesignComponent ]
})
export class MotionDesignModule { }