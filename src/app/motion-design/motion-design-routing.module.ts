import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MotionDesignComponent } from './motion-design.component';

const routes: Routes = [
  { path: '', component: MotionDesignComponent }
];

export const MotionDesignRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
