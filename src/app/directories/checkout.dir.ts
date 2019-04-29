import { Component } from '@angular/core';
import { BrowserStorageServices } from './../services/storage.service';

@Component({
  selector : 'checkout-dir',
  template : `
    <div 
      class="row" 
      *ngIf="true">
      
    </div>    
  `
})

export class CheckoutComponent{
  public cart : any = {};
  public billingDetails : any = {};
  public cartFlag : boolean = false;
  public billingFlag : boolean = false;
  constructor(
    public service : BrowserStorageServices
  ){
    this.load();
  }
  load(){
    this.cart = this.service.get("cart");
    this.billingDetails = this.service.get("billing");
    if(this.cart == undefined){
      this.cart = {}
    }
    if(this.billingDetails == undefined){
      this.billingDetails = {}
    }
    this.cartFlag = Object.getOwnPropertyNames(this.cart).length > 0 ? true : false;
    this.billingFlag = Object.getOwnPropertyNames(this.billingDetails).length > 0 ? true : false;
  }
}