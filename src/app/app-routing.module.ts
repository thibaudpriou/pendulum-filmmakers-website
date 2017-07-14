import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'motion-design', loadChildren: 'app/motion-design/motion-design.module#MotionDesignModule' },
  { path: 'videos', loadChildren: 'app/list/list.module#ListModule' },
  { path: '**', loadChildren: 'app/page-not-found/page-not-found.module#PageNotFoundModule' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
