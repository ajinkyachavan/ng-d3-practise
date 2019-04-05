import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { PractiseComponent } from './practise/practise.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartsComponent,
    PractiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
