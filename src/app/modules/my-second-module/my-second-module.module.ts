import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySecondComponentComponent } from './components/my-second-component/my-second-component.component';



@NgModule({
  declarations: [
    MySecondComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MySecondComponentComponent
  ]
})
export class MySecondModuleModule { }
