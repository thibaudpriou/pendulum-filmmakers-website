import { NgModule } from '@angular/core';

import { VideosComponent } from './videos.component';

@NgModule({
  declarations: [
    VideosComponent
  ],
  exports: [VideosComponent]
})
export class VideosModule { }