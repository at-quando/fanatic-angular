import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../shared/services/product.service'
import { ProductListComponent } from '../product/product-list/product-list.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit {
  clothesCareProducts: any;
  bestSellerProducts: any;
  electronicCareProducts: any;
  clothesTitle: string;
  bestSellerTitle: string;
  electronicTitle: string;

  // @ViewChild(ProductListComponent) productList: ProductListComponent;
  constructor(private _product: ProductService) {
  }

  ngOnInit() {
    this._product.getClothesCareProduct().subscribe(data => {});
    this._product._clothesCareProduct.subscribe(items => {
      if(items !=[]) {
        this.clothesCareProducts = items;
        this.clothesTitle = 'best-care-clothes';
      }
    });
    this._product.getBestSellerProduct().subscribe(data => {});
    this._product._bestSellerProduct.subscribe(items => {
      if(items !=[]) {
        this.bestSellerProducts = items;
        this.bestSellerTitle = 'best-seller-products';
      }
    });
    this._product.getElectronicCareProduct().subscribe(data => {});
    this._product._electronicCareProduct.subscribe(items => {
      if(items !=[]) {
        this.electronicCareProducts = items;
        this.electronicTitle = 'best-care-electronic';
      }
    });
  }
}
