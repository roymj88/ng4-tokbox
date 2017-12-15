import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { appRoute } from "./app.routes";
import { VideoCallComponent } from './video-call/video-call.component';
import { VideoCallManagerService } from "./common/video-call-manager.service";


@NgModule({
  declarations: [
    AppComponent,
    VideoCallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    appRoute,
  ],
  providers: [
    VideoCallManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
