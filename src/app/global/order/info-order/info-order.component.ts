import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { OrdersService } from '../../../shared/services/orders.service';

@Component({
  selector: 'info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.scss'],
  providers: [ApiService]
})
export class InfoOrderComponent {
  private sub: any;
  paymentMethod: any;
  receiver: string;
  address: string;
  phone: string;
  constructor(private api: ApiService, private _order: OrdersService) {
  }

  closeInfoOrderForm() {
    let modal_info_order = document.getElementById('modal-info-order');
    modal_info_order.style.display = 'none';
    window.onscroll = function() { };
  }

  nextStep() {
    let modal_info_order = document.getElementById('modal-info-order');
    let info_order = document.getElementById('info-order');
    let method_payment = document.getElementById('method-payment');
    modal_info_order.style.display = 'block';
    info_order.style.display = 'block';
    method_payment.style.display = 'none';
  }

  previousStep() {
    let modal_info_order = document.getElementById('modal-info-order');
    let info_order = document.getElementById('info-order');
    let method_payment = document.getElementById('method-payment');
    modal_info_order.style.display = 'block';
    info_order.style.display = 'none';
    method_payment.style.display = 'block';
  }

  payment() {
    $('#modal-info-order').fadeOut('500');
    this._order.payMent(this.receiver, this.address, this.phone).subscribe(data => {});
    this.api.setNotification('green', 'Success to order products, please check mail to more detail!');
    localStorage.removeItem('ordersList');
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }
}
