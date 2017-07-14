import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MotionDesignRoutingModule } from './motion-design-routing.module';

import { MotionDesignComponent } from './motion-design.component';

@NgModule({
  imports : [
    SharedModule,
    MotionDesignRoutingModule
  ],
  declarations: [
    MotionDesignComponent
  ]
})
export class MotionDesignModule { }
