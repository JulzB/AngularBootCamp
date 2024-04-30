import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstModuleModule } from './modules/my-first-module/my-first-module.module';
import { MySecondModuleModule } from './modules/my-second-module/my-second-module.module';
import { MyThirdModuleModule } from './modules/my-third-module/my-third-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyFirstModuleModule,
    MySecondModuleModule,
    MyThirdModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
