import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from './authenticate/login/login.component';
import { InfoOrderComponent } from './order/info-order/info-order.component'
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
  @ViewChild(InfoOrderComponent) info_order: InfoOrderComponent;
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
    // this.app.getAllShops().subscribe(
    //   data => {
      //     this.shops = data.shops;
      //   },
      //   err => console.log("can't get data", err.status, err.url),
      //   () => console.log("Get complete")
      //   );
      // this.app.getAllCategories().subscribe(
      // //   data => {
        // //     this.categories = data.category;
        // //     console.log(this.categories.length);
        // //     console.log(this.categories.Electronic.Laptop);
        // //     console.log(this.categories.Clothes["Men's clothes"]);
        // //   },
        // //   err => console.log("can't get data",err.status, err.url),
        // //   () => console.log("Get complete")
        // // );

        this.categories = {
          "category": {
            "Electronic": {
              "Computer": [
              {
                "id": 15,
                "title": "Laptop",
                "parent_id": 2,
                "lft": 3,
                "rgt": 4,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:16.000Z",
                "updated_at": "2017-08-29T01:45:17.000Z"
              },
              {
                "PC": [
                {
                  "id": 19,
                  "title": "RAM",
                  "parent_id": 16,
                  "lft": 6,
                  "rgt": 7,
                  "depth": 3,
                  "children_count": 0,
                  "created_at": "2017-08-29T01:45:16.000Z",
                  "updated_at": "2017-08-29T01:45:17.000Z"
                },
                {
                  "id": 20,
                  "title": "Vega",
                  "parent_id": 16,
                  "lft": 8,
                  "rgt": 9,
                  "depth": 3,
                  "children_count": 0,
                  "created_at": "2017-08-29T01:45:16.000Z",
                  "updated_at": "2017-08-29T01:45:17.000Z"
                }
                ]
              },
              {
                "Console": [
                {
                  "id": 18,
                  "title": "PS4",
                  "parent_id": 17,
                  "lft": 12,
                  "rgt": 13,
                  "depth": 3,
                  "children_count": 0,
                  "created_at": "2017-08-29T01:45:16.000Z",
                  "updated_at": "2017-08-29T01:45:17.000Z"
                }
                ]
              }
              ],
              "Phone & Tablet": [
              {
                "id": 10,
                "title": "Tablet",
                "parent_id": 3,
                "lft": 17,
                "rgt": 18,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:15.000Z",
                "updated_at": "2017-08-29T01:45:17.000Z"
              },
              {
                "id": 11,
                "title": "Mobile phone",
                "parent_id": 3,
                "lft": 19,
                "rgt": 20,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:15.000Z",
                "updated_at": "2017-08-29T01:45:17.000Z"
              },
              {
                "Accossories": [
                {
                  "id": 13,
                  "title": "Bao da",
                  "parent_id": 12,
                  "lft": 22,
                  "rgt": 23,
                  "depth": 3,
                  "children_count": 0,
                  "created_at": "2017-08-29T01:45:15.000Z",
                  "updated_at": "2017-08-29T01:45:17.000Z"
                },
                {
                  "id": 14,
                  "title": "Battery",
                  "parent_id": 12,
                  "lft": 24,
                  "rgt": 25,
                  "depth": 3,
                  "children_count": 0,
                  "created_at": "2017-08-29T01:45:15.000Z",
                  "updated_at": "2017-08-29T01:45:17.000Z"
                }
                ]
              }
              ],
              "Camera & Recorder": [
              {
                "id": 21,
                "title": "Action camera",
                "parent_id": 4,
                "lft": 29,
                "rgt": 30,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:16.000Z",
                "updated_at": "2017-08-29T01:45:17.000Z"
              },
              {
                "id": 22,
                "title": "Digital camera",
                "parent_id": 4,
                "lft": 31,
                "rgt": 32,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:16.000Z",
                "updated_at": "2017-08-29T01:45:17.000Z"
              }
              ],
              "TV & Digital devices": [
              {
                "id": 23,
                "title": "Smart TV",
                "parent_id": 5,
                "lft": 35,
                "rgt": 36,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:17.000Z",
                "updated_at": "2017-08-29T01:45:17.000Z"
              },
              {
                "id": 24,
                "title": "Big TV",
                "parent_id": 5,
                "lft": 37,
                "rgt": 38,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:17.000Z",
                "updated_at": "2017-08-29T01:45:17.000Z"
              }
              ]
            },
            "Clothes": {
              "Men's clothes": [
              {
                "id": 25,
                "title": "Men's shoes",
                "parent_id": 7,
                "lft": 43,
                "rgt": 44,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:17.000Z",
                "updated_at": "2017-08-29T01:45:18.000Z"
              },
              {
                "id": 28,
                "title": "Men's wear",
                "parent_id": 7,
                "lft": 45,
                "rgt": 46,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:17.000Z",
                "updated_at": "2017-08-29T01:45:18.000Z"
              }
              ],
              "Women's clothes": [
              {
                "id": 26,
                "title": "Women's shoes",
                "parent_id": 8,
                "lft": 49,
                "rgt": 50,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:17.000Z",
                "updated_at": "2017-08-29T01:45:18.000Z"
              },
              {
                "id": 29,
                "title": "Women's wear",
                "parent_id": 8,
                "lft": 51,
                "rgt": 52,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:17.000Z",
                "updated_at": "2017-08-29T01:45:18.000Z"
              }
              ],
              "Child's clothes": [
              {
                "id": 27,
                "title": "Child's shoes",
                "parent_id": 9,
                "lft": 55,
                "rgt": 56,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:17.000Z",
                "updated_at": "2017-08-29T01:45:18.000Z"
              },
              {
                "id": 30,
                "title": "Child's wear",
                "parent_id": 9,
                "lft": 57,
                "rgt": 58,
                "depth": 2,
                "children_count": 0,
                "created_at": "2017-08-29T01:45:17.000Z",
                "updated_at": "2017-08-29T01:45:18.000Z"
              }
              ]
            }
          }
        }
        this.categories = this.resolve(this.categories);
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
        var modal_in = document.getElementById("modal-in");
        var login = document.getElementById("login");
        var signupForm = document.getElementById("signup");
        var navLogin = document.getElementById("nav-login");
        var navSignUp = document.getElementById("nav-signup")
        modal_in.style.display = "block";
        login.style.display = "block";
        signupForm.style.display = "none";
        navLogin.classList.add("actived");
        if(navSignUp.classList.contains("actived")) {
          navSignUp.classList.remove("actived")
        }
        // this.disableScrolling();
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
