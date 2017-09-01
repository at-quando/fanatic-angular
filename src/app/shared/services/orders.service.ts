import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {BehaviorSubject, Subject, Subscriber} from 'rxjs';
import { ProductOrder } from '../models/ProductOrder';

@Injectable()
export class OrdersService {
  private apiURL = "http://172.17.19.240:3001";
  products: ProductOrder[]=[];
  private productsConvert: ProductOrder;
  

  constructor(private http: Http) {
    // this.productsSubject.subscribe(items => this.products = items );
  }

  addToCart(item: any, quantity: number) {
    if (JSON.parse(localStorage.getItem('ordersList'))) {
      this.products = JSON.parse(localStorage.getItem('ordersList'));
    }
    else {
      this.products = [];
    }

    const filterProduct =this.products.filter(itemOrder => itemOrder.id == item.id)
    if(filterProduct.length == 0) {
      item.quantity = quantity;
      this.productsConvert = item;
      this.products.push(this.productsConvert);
    }
    else {
      filterProduct[0].quantity = filterProduct[0].quantity + quantity;
    }
    localStorage.setItem('ordersList', JSON.stringify(this.products));
  }
}
