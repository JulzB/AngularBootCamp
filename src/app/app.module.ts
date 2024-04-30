import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MyCustomDialogComponent } from './components/my-custom-dialog/my-custom-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MyCustomDialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
