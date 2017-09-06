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

  disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function() { window.scrollTo(x, y); };
  }

  payment() {
    let current_user = localStorage.getItem('current_user');
    if(current_user == null) {
      // console.log('Ban phai dang nhap truoc');
      var login = document.getElementById("modal-in");
      var signupForm = document.getElementById("signup");
      var navLogin = document.getElementById("nav-login");
      login.style.display = "block";
      signupForm.style.display = "none";
      navLogin.classList.add("actived");
      this.disableScrolling();
    }
    else {
      this._order.payMent().subscribe(data => {});
    }
  }
}
