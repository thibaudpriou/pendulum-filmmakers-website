import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

export const AboutRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
