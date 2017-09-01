import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product-list/product.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ConfirmEmailComponent } from './authenticate/confirm-email/confirm-email.component';
import { UserComponent } from './user/user.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':name', component: ProductComponent},
  { path: 'confirm_email/:token', component: ConfirmEmailComponent},
  { path: 'customer/account', component: UserComponent},
  { path: 'shop/:id', component: ShopComponent},
  { path: ':name/:id', component: ProductDetailComponent}

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);