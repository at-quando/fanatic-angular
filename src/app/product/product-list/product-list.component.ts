import { Component, OnInit, ViewChild, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { OrdersService } from '../../shared/services/orders.service'
import { PaginationComponent } from '../../shared/layout/pagination/pagination.component';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService, OrdersService]
})
export class ProductListComponent implements OnInit {
  id: any;
  subs: any
  products: any;
  title: any;

  @Input('list') listProduct: any;
  constructor(
    private _product: ProductService,
    private _order: OrdersService,
    private route: ActivatedRoute
  ) {
    this.products = [];
    this.subs = this.route.params.subscribe(params => {
      this.id = params['id'];
  });
}

  ngOnInit() {
    if(this.listProduct) {
      this.products = this.listProduct;
    }
  }

  ngOnDestroy() {
  }

  add_to_cart(item: any, quantity: number) {
    this._order.addToCart(item, quantity);
  }
  
  topPage(){
     window.scrollTo(0, 0);
  }
}
