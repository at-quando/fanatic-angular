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
  private productsConvert: ProductOrder;
  productsSubject:  Subject<ProductOrder[]> = new Subject();
  totalSubject: Subject<Number> = new Subject();
  products: ProductOrder[]=[];
  total: number;
  payment: any;

  constructor(private http: Http) {

  }

  getItem(): Observable<ProductOrder[]> {
    this.productsSubject.next(JSON.parse(localStorage.getItem('ordersList')));
    return this.productsSubject;
  }

  addToCart(item: any, quantity: number) {
    if (JSON.parse(localStorage.getItem('ordersList'))) {
      this.products = JSON.parse(localStorage.getItem('ordersList'));
    }
    else {
      this.products = [];
    }

    const filterProduct = this.products.filter(itemOrder => itemOrder.id == item.id)
    if(filterProduct.length == 0) {
      item.quantity = quantity;
      this.productsConvert = item;
      this.productsSubject.next([...this.products,this.productsConvert]);
      this.products.push(this.productsConvert);
    }
    else {
      filterProduct[0].quantity = filterProduct[0].quantity + quantity;
    }
    localStorage.setItem('ordersList', JSON.stringify(this.products));
  }

  deleteItem(item: any) {
    this.products = JSON.parse(localStorage.getItem('ordersList'));
    this.products = this.products.filter(_item => _item.id != item.id);
    localStorage.setItem('ordersList', JSON.stringify(this.products));
    this.productsSubject.next(this.products);
  }

  minusQuantity(item :any) {
    this.products = JSON.parse(localStorage.getItem('ordersList'));
    this.products.map(_item => {
      if(item.id == _item.id) {
        if(_item.quantity > 1) {
          _item.quantity--
        }
      }
    })
    localStorage.setItem('ordersList', JSON.stringify(this.products));
    this.productsSubject.next(this.products);
  }

  plusQuantity(item :any) {
    this.products = JSON.parse(localStorage.getItem('ordersList'));
    this.products.map(_item => {
      if(item.id == _item.id) {
        _item.quantity++
      }
    })
    localStorage.setItem('ordersList', JSON.stringify(this.products));
    this.productsSubject.next(this.products);
  }

  getTotal() {
    this.products = JSON.parse(localStorage.getItem('ordersList'));
    this.productsSubject.next(this.products);
    return this.products.reduce((prev, curr: ProductOrder) => {
      return prev + curr.properties[0].price*curr.quantity;
    }, 0);
  }

  numberItemOrder() {
    this.products = JSON.parse(localStorage.getItem('ordersList'));
    this.productsSubject.next(this.products);
    return this.products != null ? this.products.length : 0;
  }

  payMent = () => {
    this.payment = JSON.parse(localStorage.getItem('ordersList'));
    let orders = [];
    this.payment.map(_item => {
      let item = {}
      item['quantity'] = _item.quantity;
      item['property'] = _item.properties[0].id;
      orders.push(item);
    })
    let currentUser = JSON.parse(localStorage.getItem('current_user'));
    let headers = new Headers({
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Token': currentUser.access_token,
      'Uid': currentUser.uid,
      'Provider': currentUser.provider
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURL + `/orders`, JSON.stringify({ orders: orders }), options)
      .map((response: Response) => {
        console.log(123);
        // localStorage.removeItem('current_user');
        // location.reload();
      });
  }
}
