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
  private products: ProductOrder[]=[];
  constructor(
    private _order: OrdersService
  ) { 
    this.products = [];
  }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('ordersList'));
    console.log(this.products);
  }

}
