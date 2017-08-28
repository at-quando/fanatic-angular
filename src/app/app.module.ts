import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './authenticate/login/login.component';
import { NavUserDirective } from './shared/directive/nav-user.directive';
import { NavCategoryDirective } from './shared/directive/nav-category.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { FacebookModule } from 'ngx-facebook';
import { ProductComponent } from './product/product-list/product.component';
import { routing, appRoutingProviders } from './app.route';
import { HomeComponent } from './home/home.component';
import { KeysPipe } from './shared/pipe/categories.pipe';
import { UiTreeComponent } from './shared/layout/ui-tree/ui-tree.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CategoryTreeComponent } from './product/category-tree/category-tree.component';
import { UiTreeAsideComponent } from './product/category-tree/ui-tree-aside/ui-tree-aside.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavUserDirective,
    NavCategoryDirective,
    ProductComponent,
    HomeComponent,
    KeysPipe,
    UiTreeComponent,
    ProductDetailComponent,
    CategoryTreeComponent,
    UiTreeAsideComponent
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


