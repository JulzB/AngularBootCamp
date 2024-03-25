import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.textContent = this.capitalize(this.el.nativeElement.textContent);
  }

  capitalize(textContent: string): string {
    return textContent.charAt(0).toUpperCase() + textContent.slice(1).toLowerCase();
  }
}
