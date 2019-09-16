import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ActordataService } from './services/actordata.service';
import { ObservableService } from './services/observable.service';
import { BlogService } from './services/blog.service';
import { WeatherService } from './services/weather.service';

import { AppComponent } from './app.component';
import { AnglistComponent } from './components/anglist/anglist.component';
import { MessageComponent } from './components/message/message.component';
import { ObservabledemoComponent } from './components/observabledemo/observabledemo.component';
import { BlogComponent } from './components/blog/blog.component';
import { WeatherDemoComponent } from './components/weather-demo/weather-demo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { ReversetextPipe } from './pipes/reversetext.pipe';
import { PiglatinPipe } from './pipes/piglatin.pipe';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';




@NgModule({
  declarations: [
    AppComponent,
    AnglistComponent,
    MessageComponent,
    ObservabledemoComponent,
    BlogComponent,
    WeatherDemoComponent,
    ParentComponent,
    ChildComponent,
    PipedemoComponent,
    ReversetextPipe,
    PiglatinPipe,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ActordataService,
    ObservableService,
    BlogService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
