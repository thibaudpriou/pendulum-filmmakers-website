import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';
import { VideoRoutingModule } from './video-routing.module';

import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    SharedModule,
    VideoRoutingModule
  ],
  declarations : [ VideoComponent ]
})

export class VideoModule { }
