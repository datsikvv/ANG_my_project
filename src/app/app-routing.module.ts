import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { CartComponent } from './store/cart/cart.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './admin/product/product.component';
import { MainComponent } from './admin/main/main.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [ 
  {path: 'store', component: StoreComponent}, 

  {
    path: 'admin', component: MainComponent ,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'products', canActivate: [AuthGuard]},
      {path: 'products', component: ProductComponent, canActivate: [AuthGuard]},
      {path: 'products/:mode', component: ProductFormComponent, canActivate: [AuthGuard]},
      {path: 'products/:mode/:id', component: ProductFormComponent, canActivate: [AuthGuard]},
      {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent}
    ]
  },

  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'admin/products', component: ProductComponent},
  {path: '', pathMatch: 'full', redirectTo: 'store'}];

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
