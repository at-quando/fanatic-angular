import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ConfirmEmailComponent } from './authenticate/confirm-email/confirm-email.component';
import { UserComponent } from './user/user.component';
import { InforComponent } from './user/infor/infor.component'
import { HistoryComponent } from './user/history/history.component'
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './order/order.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop/:name', component: ShopDetailComponent},
  { path: 'shop', component: ShopListComponent},
  { path: 'order', component: OrderComponent },
  { path: ':name', component: ProductComponent},
  { path: 'confirm_email/:token/:uid/:provider', component: ConfirmEmailComponent},
  { path: 'customer/account', component: UserComponent, children: [
    { path: '', redirectTo: 'infor', pathMatch: 'full' },
    { path: 'infor', component: InforComponent },
    { path: 'history', component: HistoryComponent }
  ]},
  { path: 'shop/:id', component: ShopComponent},
  { path: 'customer/account', component: UserComponent},
  { path: ':name/:id', component: ProductDetailComponent}
  

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);