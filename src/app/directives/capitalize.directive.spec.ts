import { CapitalizeDirective } from './capitalize.directive';
import { ElementRef } from '@angular/core';

describe('CapitalizeDirective', () => {
  let elementRefMock: ElementRef;
  it('should create an instance', () => {
    const directive = new CapitalizeDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
