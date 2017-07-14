import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoComponent } from './video.component';

const routes: Routes = [
  {
    path: 'video', children: [
      {
        path: ':id', component: VideoComponent
      }
    ]
  }
];

export const VideoRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
