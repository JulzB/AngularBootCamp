import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework3Component } from './homework3/homework3.component';
import { CapitalizeDirective } from './directives/capitalize.directive';

@NgModule({
  declarations: [
    AppComponent,
    Homework3Component,
    CapitalizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
