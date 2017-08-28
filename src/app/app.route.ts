import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product-list/product.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':name', component: ProductComponent},
  { path: 'detail/:id', component: ProductDetailComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);