import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { MotionDesignComponent } from './motion-design/motion-design.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'motion-design', component: MotionDesignComponent },
  { path: 'videos', component: ListComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
