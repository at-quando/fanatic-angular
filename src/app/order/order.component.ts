import { Component, OnInit } from '@angular/core';
import { ProductOrder } from '../shared/models/ProductOrder';
import { OrdersService } from '../shared/services/orders.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [OrdersService]
})
export class OrderComponent implements OnInit {
  private productsSubject: any;
  private products: any;
  constructor(
    private _order: OrdersService
  ) {
  }

  ngOnInit() {

    this.productsSubject = this._order.getItem();
    this.productsSubject.subscribe(data =>{this.products = data});
    console.log(this._order.getItem());
  }

  getTotal() {
    return this._order.getTotal();
  }

  deleteOrderItem(item: any) {
    this._order.deleteItem(item);
  }

  minusQuantity(item :any) {
    this._order.minusQuantity(item);
  }

  plusQuantity(item :any) {
    this._order.plusQuantity(item);
  }

  numberItem() {
    return this._order.numberItemOrder();
  }

  payment() {
    this._order.payMent();
  }
}
