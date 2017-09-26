import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from './authenticate/login/login.component';
import { AuthenticationService } from "./shared/services/authenticate.service";
import { AppService } from './app.service';
import { OrdersService } from './shared/services/orders.service'
import { AuthService } from 'angular2-social-login';
import { ProductService } from './shared/services/product.service'
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthenticationService, AppService, OrdersService, ProductService]
})
export class AppComponent {
  public user;
  private categories: any;
  private shops: any;
  sub: any;
  name: string;
  id: any;
  sublogout: any;
  key: string = 'category';
  uid: any;
  search: string;
  searchName: any;
  searchList: any;

  @ViewChild(LoginComponent) login: LoginComponent;
  constructor(
    private _auth: AuthenticationService,
    private fb: FacebookService,
    private app: AppService,
    private _order: OrdersService,
    private _product: ProductService
    ) {
    fb.init({
      appId: '107975049932344',
      version: 'v2.9'
    });
    if (localStorage.current_user) {
      this.name = JSON.parse(localStorage.current_user).user_name;
      this.uid = JSON.parse(localStorage.current_user).uid;
      this.id = JSON.parse(localStorage.current_user).user_id;
    }
  }
  ngOnInit() {
    $('.search-name').hide();
    this.app.getAllShops().subscribe(
      data => {
        this.shops = data.shops;
      },
      err => console.log("can't get data", err.status, err.url),
      () => console.log("Get complete")
      );
    this.app.getAllCategories().subscribe(
      data => {
          this.categories = data.category;
        },
        err => console.log("can't get data",err.status, err.url),
        () => console.log("Get complete")
      );
    }

    resolve(obj) {
      return obj["category"];
    }

    numberItem() {
      return this._order.numberItemOrder();
    }

    disableScrolling() {
      window.scrollTo(0,0);
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function() { window.scrollTo(x, y); };
    }

    loginForm() {
      var login = document.getElementById("modal-in");
      var signupForm = document.getElementById("signup");
      var navLogin = document.getElementById("nav-login");
      login.style.display = "block";
      signupForm.style.display = "none";
      navLogin.classList.add("actived");
      this.disableScrolling();
    }

    loginFacebook() {
      this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this._auth.pushTokenFacebook(res.authResponse).subscribe(data => { });
      })
      .catch(this.handleError);
    }

    logout() {
      this.sublogout = this._auth.logout().subscribe(data => { });
    }


    private handleError(error) {
      console.error('Error processing action', error);
    }

    somethingSearch(newvalue) {
      this.search = newvalue;
      this._product.getSuggestSearch(this.search).subscribe(data => {});
      this._product._suggestSearchName.subscribe(items => {
        if(this.search) {
          this.searchName = items;
        }
        else {
          this.search = null;
           this.searchName = null;
        }
      })
    }

    showListSearch(event:any) {
      let key = event.keyCode || event.which;
      if(key == 13) {
        this._product.searchProductByName(this.search).subscribe(data => {});
        this._product._searchProductname.subscribe(items => {
          this.searchList = items;
        })
      }
    }

    closeSearch() {
      this.search = null;
      $('.search-name').hide();
    }

    disableSearch(){
      $('.search-name').hide();
    }

    enableSearch(){
      $('.search-name').show();
    }
  }
