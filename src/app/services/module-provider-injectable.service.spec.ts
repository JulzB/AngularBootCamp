import { TestBed } from '@angular/core/testing';

import { ModuleProviderInjectableService } from './module-provider-injectable.service';

describe('ModuleProviderInjectableService', () => {
  let service: ModuleProviderInjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleProviderInjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
