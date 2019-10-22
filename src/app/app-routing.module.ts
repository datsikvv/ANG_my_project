import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { CartComponent } from './store/cart/cart.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './admin/product/product.component';


const routes: Routes = [ 
  {path: 'store', component: StoreComponent}, 
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin/login', component: LoginComponent},
  {path: 'admin/products', component: ProductComponent},
  {path: '', pathMatch: 'full', redirectTo: 'store'}];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
