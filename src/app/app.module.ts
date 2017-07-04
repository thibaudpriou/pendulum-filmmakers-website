import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Feature */
import { AboutModule } from './about/about.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { MotionDesignModule } from './motion-design/motion-design.module';
import { VideosModule } from './videos/videos.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,

    AboutModule,
    DashboardModule,
    FooterModule,
    HeaderModule,
    MotionDesignModule,
    VideosModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
