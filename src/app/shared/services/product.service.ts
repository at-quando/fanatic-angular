import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {BehaviorSubject, Subject, Subscriber} from 'rxjs';
import { Product } from '../models/Product';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductService {
  private apiURL = "http://172.17.19.240:3001";
  _productSubject: Subject<Product[]> = new Subject<Product[]>();
  _oneProductSubject: Subject<Product[]> = new Subject<Product[]>();
  _count: Subject<number> = new Subject<number>();
  _countShop: Subject<number> = new Subject<number>();
  _recommendProductSubject: Subject<Product[]> = new Subject<Product[]>();
  _ProductByShopSubject: Subject<Product[]> = new Subject<Product[]>();
  _brandSubject: Subject<any> = new Subject<any>();
  _clothesCareProduct: Subject<any> = new Subject<any>();
  _electronicCareProduct: Subject<any> = new Subject<any>();
  _suggestSearchName: Subject<any> = new Subject<any>();
  _searchProductname: Subject<any> = new Subject<any>();

  constructor(private http: Http) { }

  getProduct = (title, page, brand_id) => {
    let params = new URLSearchParams();
    params.set('title', title);
    params.set('page', page);
    params.set('brand_id', brand_id.toString());
    let options = new RequestOptions();
    options.search=params;
    return this.http.get(`${environment.apiURL}/products`, options)
    .map((response: Response) => {
      let _header = response.headers;
      let _body = response.json();
      this._productSubject.next(_body.products);
      this._count.next(_body.meta.count);
    });
  }

  getRecommendProduct = (title,id,brandId) => {
    let params = new URLSearchParams();
    params.set('title', title);
    params.set('id', id);
    params.set('brand_id', brandId);
    let options = new RequestOptions();
    options.search=params;
    return this.http.get(`${environment.apiURL}/recommend_products`, options)
    .map((response: Response) => {
      let _header = response.headers;
      let _body = response.json();
      this._recommendProductSubject.next(_body.products);
    });
  }

  getProductByShop = (id, page) => {
    let params = new URLSearchParams();
    params.set('id', id);
    params.set('page', page);
    let options = new RequestOptions();
    options.search=params;
    return this.http.get(`${environment.apiURL}/shop_products`, options)
    .map((response: Response) => {
      let _body = response.json();
      this._ProductByShopSubject.next(_body.products);
      this._countShop.next(_body.meta.count);
    });
  }

  getOneProduct = (id) => {
    let params = new URLSearchParams();
    params.set('id', id);
    let options = new RequestOptions();
    options.search=params;
    return this.http.get(`${environment.apiURL}/products/${id}`, options)
    .map((response: Response) => {
      let _body = response.json();
      this._oneProductSubject.next(_body.product);
    });
  }

  getBrand = (title: any) => {
    let params = new URLSearchParams();
    params.set('title', title);
    let options = new RequestOptions();
    options.search = params;
    return this.http.get(`${environment.apiURL}/brands`, options)
    .map((response: Response) => {
      let _body = response.json();
      this._brandSubject.next(_body.category_brands);
    });
  }

  getClothesCareProduct = () => {
    let options = new RequestOptions();
    return this.http.get(`${environment.apiURL}/clothes_care_products`, options)
    .map((response: Response) => {
      let _body = response.json();
      this._clothesCareProduct.next(_body.products);
    })
  }

  getElectronicCareProduct = () => {
    let options = new RequestOptions();
    return this.http.get(`${environment.apiURL}/electronic_care_products`, options)
    .map((response: Response) => {
      let _body = response.json();
      if(_body) {
        this._electronicCareProduct.next(_body.products);
      }
    })
  }

  getSuggestSearch = (search: any) => {
    let params = new URLSearchParams();
    params.set('suggest_name', search);
    let options = new RequestOptions();
    options.search = params;
    return this.http.get(`${environment.apiURL}/suggest_search`, options)
    .map((response: Response) => {
      let _body = response.json();
      this._suggestSearchName.next(_body.products);
    });
  }

  searchProductByName = (nameSearchProduct) => {
    let params = new URLSearchParams();
    params.set('name', nameSearchProduct);
    let options = new RequestOptions();
    options.search = params;
    return this.http.get(`${environment.apiURL}/search`, options)
    .map((response: Response) => {
      let _body = response.json();
      this._searchProductname.next(_body.products);
    })
  }
}
