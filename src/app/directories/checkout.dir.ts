import { Component } from '@angular/core';
import { BrowserStorageServices } from './../services/storage.service';

@Component({
  selector : 'checkout-dir',
  template : `
    <div class="row" *ngIf="cart!=null && billingDetails != null">
      My checkout Compeonnet
    </div>
  `
})

export class CheckoutComponent{
  public cart : any = {};
  public billingDetails : any = {};
  constructor(
    public service : BrowserStorageServices
  ){
    this.load();
  }
  load(){
    this.cart = this.service.get("cart");
    this.billingDetails = this.service.get("billing");
  }
}