import { Component, OnInit } from '@angular/core';
import { ProductOrder } from '../shared/models/ProductOrder';
import { OrdersService } from '../shared/services/orders.service'
import { ApiService } from '../shared/services/api.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [OrdersService, ApiService]
})
export class OrderComponent implements OnInit {
  private productsSubject: any;
  private products: any;
  constructor(
    private _order: OrdersService,
    private api: ApiService
    ) {
  }

  ngOnInit() {
    this.productsSubject = this._order.getItem();
    this.productsSubject.subscribe(data => {
      this.products = data
    });
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
      this.api.setNotification('yellow', 'Have you had account?, sign up to join!')
      var modal_in = document.getElementById("modal-in");
      var login = document.getElementById("login");
      var signupForm = document.getElementById("signup");
      var navSignUp = document.getElementById("nav-signup");
      var navLogin = document.getElementById("nav-login");
      login.style.display = "none";
      modal_in.style.display = "block";
      signupForm.style.display = "block";
      navSignUp.classList.add("actived");
      if(navLogin.classList.contains("actived")) {
        navLogin.classList.remove("actived")
      }
      // this.disableScrolling();
    }
    else {
      this._order.payMent().subscribe(data => {});
      this.api.setNotification("green", "Success to order products, please check mail to more detail! ");
      localStorage.removeItem('ordersList');
    }
  }
}
