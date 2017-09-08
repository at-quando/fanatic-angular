import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { OrdersService } from '../../shared/services/orders.service';
import { ReviewService } from '../../shared/services/review.service';
import { ImageZoomModule } from 'angular2-image-zoom';
import * as $ from 'jquery';
import { ProductListComponent } from '../product-list/product-list.component';
import { ReviewComponent } from '../../review/review.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ProductService, OrdersService, ReviewService]
})

export class ProductDetailComponent implements OnInit {
  quantity: number;
  sub: any;
  category: any;
  id: any;
  ids: any;
  product: any;
  property: any;
  zoomImage: any;
  productAnalyze: any;
  productRecommend: any;

  @ViewChild(ProductListComponent) productList: ProductListComponent;
  @ViewChild(ReviewComponent) reviewList: ReviewComponent;
  constructor(
    private route: ActivatedRoute, 
    private _product: ProductService,
    private _order: OrdersService,
    private _review: ReviewService) { 
    this.quantity = 1;
    this.productAnalyze={};
  }

  ngOnInit() {
    var color= document.getElementById("propertycolorist");
    this.sub = this.route.params.subscribe(params => {
      this.category = params['name'].toUpperCase();
      this.ids = params['id'];
      this._product.getOneProduct(this.ids).subscribe(data=>{});
      this._product._oneProductSubject.subscribe(obj => {
        this.product = obj;
        this.property=this.product.properties;
        this._product.getRecommendProduct(this.category,this.ids,this.product.brand.id).subscribe(obj => {});
        this._product._recommendProductSubject.subscribe(obj => {
          this.productRecommend=obj;
          this.productList.products=this.productRecommend;
        });
        
        this.setProperty(this.property);
        setTimeout(()=>{this.showColor(Object.keys(this.productAnalyze)[0])},50);
      });
    });
  }

  ngAfterViewInit() {
    
  }

  minusQuantity() {
    this.quantity--;
  }

  plusQuantity() {
    this.quantity++;
  }

  add_to_cart(item: any) {
    this._order.addToCart(item, this.quantity);
  }

  toggleImage(src) {
    this.zoomImage= src;
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }

  setProperty(prop) {
    this.productAnalyze=[];
    for(var k in prop) {
      if(this.property[k].storage!=null && this.property[k].size==null) {
        var a=`${this.property[k].storage} GB`;
      }
      else if(this.property[k].storage==null && this.property[k].size!=null) {
        var a = `${this.property[k].size}`;
      }
      var l=a.toString();
      if(!this.productAnalyze[l]) {
        this.productAnalyze[l]=[];
        this.productAnalyze[l].push({id: prop[k].id, price: prop[k].price, color: prop[k].color});
      }
      else {
        this.productAnalyze[l].push({id: prop[k].id, price: prop[k].price, color: prop[k].color})
      }
    }
  }

  showColor(prop) {
    if(event) {this.enableClickBtn('item',event.currentTarget)};
    var colorist= document.getElementById("propertycolorist");
    var price= document.getElementById("productprice");
    var priceWithColor= document.getElementById("productprice");
      while (colorist.firstChild) {
        colorist.removeChild(colorist.firstChild);
      }
      while (priceWithColor.firstChild) {
        priceWithColor.removeChild(priceWithColor.firstChild);
      }
    for( var k in this.productAnalyze[prop]) {
      //color property 
      var div= document.createElement("div");
      div.classList.add('filled-circle');
      div.style.backgroundColor=this.productAnalyze[prop][k].color;
      colorist.appendChild(div);
      //price property
      var divPrice= document.createElement("div");
      divPrice.classList.add('price');
      divPrice.setAttribute("data-info",this.productAnalyze[prop][k].id);
      divPrice.onclick= () => { 
        this.id=$(divPrice).attr('data-info');
        this.enableClickBtn('price',event.currentTarget);
       };
      var span=document.createElement("span");
      var h5=document.createElement("h5");
      h5.innerHTML=`$ ${this.productAnalyze[prop][k].price}`;
      span.innerHTML=this.productAnalyze[prop][k].color;
      divPrice.appendChild(h5);
      divPrice.appendChild(span);
      priceWithColor.appendChild(divPrice);
    }
    var items= document.getElementsByClassName('price');
    items[0].classList.add('active');
    this.id=this.productAnalyze[prop][0].id;
  }

  enableClickBtn(cls,obj) {
    var items= document.getElementsByClassName(cls);
    for(var i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }​
    $(obj).addClass('active');
  }

  addToCart(product) {
    var props=product.properties.filter(item => item.id ==this.id);  
    product.properties=props;
    this._order.addToCart(product,this.quantity);
  }
}
