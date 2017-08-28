import { Directive, Input, TemplateRef, ViewContainerRef,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appNavCategory]'
})
export class NavCategoryDirective {
  @Input() appNavCategory: any;
  splitInfo: any;
  currentPosition:any;
  count: any;
  level:  any;
  countChild: any;
  i:any;
  arrayLevel= new Array;
  constructor(  
    private el: ElementRef,
    private renderer: Renderer) {
     }

   ngOnInit(){
     
 
  }

//  scan(obj)
// {
//     var k;
//     if (obj instanceof Object) {
//         for (k in obj){
//             if (obj.hasOwnProperty(k)){
//                 //recursive call to scan property
//                 this.scan( obj[k] );  
//             }                
//         }
//     } else {
//         //not an Object so obj[k] here is a value
//     };

// };
}

