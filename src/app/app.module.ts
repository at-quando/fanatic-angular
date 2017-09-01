import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './authenticate/login/login.component';
import { NavUserDirective } from './shared/directive/nav-user.directive';
import { PropertyDirective } from './shared/directive/property-product.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { FacebookModule } from 'ngx-facebook';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { routing, appRoutingProviders } from './app.route';
import { HomeComponent } from './home/home.component';
import { KeysPipe } from './shared/pipe/categories.pipe';
import { ReplaceBlankPipe } from './shared/pipe/replaceBlank.pipe';
import { UiTreeComponent } from './shared/layout/ui-tree/ui-tree.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CategoryTreeComponent } from './product/category-tree/category-tree.component';
import { UiTreeAsideComponent } from './product/category-tree/ui-tree-aside/ui-tree-aside.component';
import { ConfirmEmailComponent } from './authenticate/confirm-email/confirm-email.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { PaginationComponent } from './shared/layout/pagination/pagination.component';
import { UserComponent } from './user/user.component';
import { ShopComponent } from './shop/shop.component';
import { ReviewComponent } from './review/review.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavUserDirective,
    PropertyDirective,
    ProductComponent,
    ProductListComponent,
    HomeComponent,
    KeysPipe,
    ReplaceBlankPipe,
    UiTreeComponent,
    ProductDetailComponent,
    CategoryTreeComponent,
    FooterComponent,
    UiTreeAsideComponent,
    ConfirmEmailComponent,
    PaginationComponent,
    UserComponent,
    ShopComponent,
    ReviewComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    Angular2SocialLoginModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


