import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }