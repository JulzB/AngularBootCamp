import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyThirdComponentComponent } from './components/my-third-component/my-third-component.component';



@NgModule({
  declarations: [
    MyThirdComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyThirdComponentComponent
  ]
})
export class MyThirdModuleModule { }
