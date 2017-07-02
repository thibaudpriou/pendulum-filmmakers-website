import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about.component';
import { DashboardComponent } from './components/dashboard.component';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { VideosComponent } from './components/videos.component';

import { RoutingModule } from './routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    RoutingModule
  ],
  declarations: [
    AboutComponent,
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    VideosComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
