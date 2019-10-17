import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ModelModule } from '../model/model.module';




@NgModule({
  declarations: [StoreComponent, CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModelModule
  ]
})
export class StoreModule { }
