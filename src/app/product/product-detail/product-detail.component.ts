import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { OrdersService } from '../../shared/services/orders.service';
import { PropertyComponent } from '../property/property.component';
import { ImageZoomModule } from 'angular2-image-zoom';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ProductService, OrdersService]
})
export class ProductDetailComponent implements OnInit {
  quantity: number;
  sub: any;
  category: any;
  id: any;
  product: any;
  property: any;
  zoomImage: any;

   @ViewChild(PropertyComponent) _prop: PropertyComponent;
  constructor(
    private route: ActivatedRoute, 
    private _product: ProductService,
    private _order: OrdersService
  ) { 
    this.quantity = 1;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.category = params['name'].toUpperCase();
      this.id = params['id'];
      this._product.getOneProduct(this.id).subscribe(data=>{});
      this._product._oneProductSubject.subscribe(obj => {
        this.product = obj;
        this._prop.setProperty(this.product.properties);
      });
    });
   
  }

  minusQuantity() {
    this.quantity--;
  }

  plusQuantity() {
    this.quantity++
  }

  add_to_cart(item: any) {
    console.log(item);
    this._order.addToCart(item, this.quantity);
  }

  toggleImage(src) {
    this.zoomImage= src;
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }
}