import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appNavUser]'
})
export class NavUserDirective {
  @Input() appNavUser: any;
  splitInfo: any;
  constructor(
    private el: ElementRef,
    private renderer: Renderer) { }

 	ngOnInit() {
    if (this.appNavUser) {
      let insteadElm = this.renderer.createElement(this.el.nativeElement, 'span');
      this.renderer.setElementClass(insteadElm, 'text-empty', true);
      insteadElm.innerHTML = "Hello " + this.appNavUser;
      var child = this.el.nativeElement.childNodes[1];
      child.insertBefore(insteadElm, child.childNodes[1]);
      var DropDown = <HTMLInputElement>document.getElementById('dropdown-user');
      var DropDownLogin = <HTMLInputElement>document.getElementById('dropdown-user-login');
      DropDown.style.display = "none";
      DropDownLogin.style.display = "block";
    }
    else {
      // let insteadElm = this.renderer.createElement(this.el.nativeElement.parentNode, 'span');
      // this.renderer.setElementClass(insteadElm,'text-empty', true);
      // insteadElm.innerHTML= "empty";
      // var parent = this.el.nativeElement.parentNode;
      // parent.insertBefore(insteadElm,this.el.nativeElement);
      // this.el.nativeElement.remove();
    }
  }
}
