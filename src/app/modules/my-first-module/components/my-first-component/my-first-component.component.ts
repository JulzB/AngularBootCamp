import { Component } from '@angular/core';
import { ModuleProviderInjectableService } from '../../../../services/module-provider-injectable.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.scss'
})
export class MyFirstComponentComponent {
  strArray: Array<string> = [];

  constructor(private moduleProviderInjectableService: ModuleProviderInjectableService) {
    this.strArray = this.moduleProviderInjectableService.strArray;
  }
}
