import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopsService } from '../../shared/services/shops.service';
import { ProductService } from '../../shared/services/product.service';
import { ProductListComponent } from '../../product/product-list/product-list.component';
import { PaginationComponent } from '../../shared/layout/pagination/pagination.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss'],
  providers: [ShopsService, ProductService]
})
export class ShopDetailComponent {
	id: number;
	shop: any;
	products: any;
	page: number;
	url: any;
	mapGG: any;


	@ViewChild(PaginationComponent) pagination: PaginationComponent;
	@ViewChild(ProductListComponent) productList: ProductListComponent;
  constructor(private route: ActivatedRoute, 
  						private shopsService: ShopsService,
  						private productService: ProductService,
  						private router: Router) { 
  	$('#locationMap').attr("src", "https://www.google.com/maps/embed/v1/search?key=AIzaSyB2pWEO7SWqwRCMbE9sMJcSzN8jSLH_YjY&q=43 Tống Phước Phổ");
  	this.mapGG = "https://www.google.com/maps/embed/v1/search?key=AIzaSyB2pWEO7SWqwRCMbE9sMJcSzN8jSLH_YjY&q=43 Tống Phước Phổ";}

  ngAfterViewInit() {
  	this.url=this.router.url;
  	this.route.params.subscribe(params => {
  		this.id=params['name'];
  		this.page=+params['page'];
  		this.shopsService.getShop(this.id).subscribe(data => {});
  		this.shopsService._shopSubject.subscribe(shop => {
  			this.shop = shop;
  			
  		})
  		this.productService.getProductByShop(this.id,this.page).subscribe(data => {});
  		this.productService._ProductByShopSubject.subscribe(product => {
  			this.products=product;
  			this.productList.products=this.products;
  		})
  		this.productService._countShop.subscribe(count => {
  			this.pagination.setPageNumber(Math.ceil(count/12));
  		})
  	})
  }
}
