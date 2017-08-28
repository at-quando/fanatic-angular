import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	id: any;
  sub: any;
  subs:any
  name:any;
  constructor(private route: ActivatedRoute) { 
  this.sub= this.route.queryParams.subscribe(params => {
      this.id= +params['id'] || 0;
      console.log(this.id);
    });
    this.subs= this.route.params.subscribe(params => {
      this.name= params['name'];
      console.log(this.name);
    })
  }

  ngOnInit() {
  	
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.subs.unsubscribe();
}
  
}
