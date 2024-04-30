import { Injectable } from '@angular/core';

@Injectable()
export class ModuleProviderInjectableService {
  public strArray: Array<string> = ['one', 'two'];
  
  constructor() { }
}
