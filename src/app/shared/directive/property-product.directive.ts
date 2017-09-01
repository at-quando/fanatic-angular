import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[property]'
})
export class PropertyDirective {
  @Input() property: any;
  splitInfo: any;
  constructor(
    private el: ElementRef,
    private renderer: Renderer) { }

 	ngOnInit() {
    if (this.property) {
      console.log(this.property);
    }
    else {
      
    }
  }
}
