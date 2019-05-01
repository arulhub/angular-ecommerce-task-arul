import { Component } from '@angular/core';
import { BrowserStorageServices } from './../services/storage.service';

@Component({
  selector : 'checkout-dir',
  template : `
    <div 
      class="row" 
      *ngIf="true"
    >
      <div class="col-sm-12">        
        <div class="alert alert-success" role="alert">
          <h5 class="alert-heading">Dear FirstName LastName,</h5>
          <p>Thank you for your order. Your order has been placed successfully and will be delivered in <strong>3 working days</strong>.</p>
          <hr>
          <p class="mb-0">
            <button class="btn btn-primary btn-sm mx-1">Print Invoice</button>
            <button class="btn btn-primary btn-sm mx-1">Place New Order</button>
          </p>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header bg-info text-white">
            <span><strong>Invoice Date: {{invoiceDate | date:"dd-MMM-yyyy"}}</strong></span>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6 text-left">
                Logo
              </div>
              <div class="col-sm-6 text-right">
                Invoice #
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-sm-6">                
                  <div><span>From:</span></div>
                  <div><strong>Shoppee Kart</strong></div>                
                  <div><span>123, Anna Salai,</span></div>
                  <div><span>Mount Road,</span></div>
                  <div><span>Chennai - 600 001</span></div>
                  <div><span>Mobile: 9876543210</span></div>
              </div>
              <div class="col-sm-6">
                <p>To:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  `
})

export class CheckoutComponent{
  public invoiceDate : any = new Date();
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