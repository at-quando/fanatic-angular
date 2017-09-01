import { Component, OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { PaginationComponent } from '../../shared/layout/pagination/pagination.component';

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
  brandId: any;
  products: any;
  count: number;
  pageNumber: number;

  @ViewChild(PaginationComponent) pagination: PaginationComponent;
  constructor(private route: ActivatedRoute, private _product: ProductService) {
    this.subs = this.route.params.subscribe(params => {
      this.title = params['name'];
      this.page = +params['page'];
      // this.brandId = +params['brandId'];
      // console.log(this.brandId);
      this._product.getProduct(this.title,this.page).subscribe(data=>{});
      this._product._productSubject.subscribe(items => {
        this.products = items; 
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
