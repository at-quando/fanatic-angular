import { Component, OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/services/product.service';
import { PaginationComponent } from '../shared/layout/pagination/pagination.component';
import { ProductListComponent } from '../product/product-list/product-list.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  id: any;
  sub: any;
  subs: any
  title: any;
  page: any;
  brandId: any = 0;
  count: number;
  pageNumber: number;
  brand: any;

  @ViewChild(PaginationComponent) pagination: PaginationComponent;
  @ViewChild(ProductListComponent) productList: ProductListComponent;
  constructor(private route: ActivatedRoute, private _product: ProductService) {
    this.subs = this.route.params.subscribe(params => {
      this.title = params['name'];
      this.page = +params['page'];
      if(params['brand_id'] != 0) {
        this.brandId = +params['brand_id']
      }
      this._product.getProduct(this.title,this.page, this.brandId).subscribe(data=>{});
      this._product._productSubject.subscribe(items => {
        this.productList.products = items; 
      });

      this._product._count.subscribe(count => {
        this.count = count; 
        this.pageNumber= Math.ceil(this.count/8);
        this.pagination.setPageNumber(this.pageNumber);
      });
    })

  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
  }
}
