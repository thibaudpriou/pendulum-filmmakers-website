import { NgModule } from '@angular/core';

import { VideoRoutingModule } from './video-routing.module';
import { SharedModule } from '../shared/shared.module';

import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    SharedModule,
    VideoRoutingModule
  ],
  declarations : [ VideoComponent ]
})

export class VideoModule { }
