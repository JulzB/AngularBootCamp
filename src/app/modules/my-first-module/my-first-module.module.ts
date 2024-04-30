import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleProviderInjectableService } from '../../services/module-provider-injectable.service';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';



@NgModule({
  declarations: [
    MyFirstComponentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ModuleProviderInjectableService
  ],
  exports: [
    MyFirstComponentComponent
  ]
})
export class MyFirstModuleModule { }
