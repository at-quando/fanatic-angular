import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { OrdersService } from '../../shared/services/orders.service';
import * as $ from 'jquery';

@Component({
  selector: 'myproperties',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})

export class PropertyComponent implements OnInit {
	public property: any;
  sub: any;
  category: any;
  id: any;
  ids: any;
  product: any;
  prd: any;
  productWithProperty: any;

  constructor( 
  	private route: ActivatedRoute, 
    private productService: ProductService,
    private _order: OrdersService) { 
  	this.product={};
  	this.property=[];
  	this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
  });
  }

  ngOnInit() {
		// this.setProperty();
  // 	this.showColor(Object.keys(this.product)[0]);
  }

  setProperty(a) {
  	console.log(a);
  	this.property=a;
  	console.log(a);
  	for(var k in this.property) {
			var l=this.property[k].storage.toString();
			if(!this.product[l]) {
				this.product[l]=[];
				this.product[l].push({id: this.property[k].id, price: this.property[k].price, color: this.property[k].color});
			}
			else {
				this.product[l].push({id: this.property[k].id, price: this.property[k].price, color: this.property[k].color})
			}
		}
		console.log(this.product);
	}

	showColor(prop){
 		this.enableClickBtn('item',event.currentTarget);
		var color= document.getElementById("propertycolor");
		var price= document.getElementById("productprice");
		var priceWithColor= document.getElementById("productprice");
		while (color.firstChild) {
    	color.removeChild(color.firstChild);
		}
		while (priceWithColor.firstChild) {
    	priceWithColor.removeChild(priceWithColor.firstChild);
		}
		for( var k in this.product[prop]) {
			//color property 
			var div= document.createElement("div");
			div.classList.add('filled-circle');
			div.style.backgroundColor=this.product[prop][k].color;
			color.appendChild(div);
			//price property
			var divPrice= document.createElement("div");
			divPrice.classList.add('price');
			divPrice.setAttribute("data-info",this.product[prop][k].id);
			divPrice.onclick= () => { 
				this.id=$(divPrice).attr('data-info');
				this.enableClickBtn('price',event.currentTarget);
			 };
			var span=document.createElement("span");
			var h5=document.createElement("h5");
			h5.innerHTML=`$ ${this.product[prop][k].price}`;
			span.innerHTML=this.product[prop][k].color;
			divPrice.appendChild(h5);
			divPrice.appendChild(span);
			priceWithColor.appendChild(divPrice);
		}
		var items= document.getElementsByClassName('price');
  	items[0].classList.add('active');
  	this.id=this.product[prop][0].id;
	}

	enableClickBtn(cls,obj){
		var items= document.getElementsByClassName(cls);
		for(var i = 0; i < items.length; i++) {
    	items[i].classList.remove('active');
		}​
    $(obj).addClass('active');
	}


}
