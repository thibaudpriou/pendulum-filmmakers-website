import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Feature */
import { AboutModule } from './about/about.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { ListModule } from './list/list.module';
import { MotionDesignModule } from './motion-design/motion-design.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { VideoModule } from './video/video.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,

    AboutModule,
    DashboardModule,
    FooterModule,
    HeaderModule,
    ListModule,
    MotionDesignModule,
    PageNotFoundModule,
    VideoModule,
    
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
