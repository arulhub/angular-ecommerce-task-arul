import { Component } from '@angular/core';
import { BrowserStorageServices } from './../services/storage.service';

import { companyModel } from './../model/company.model';

@Component({
  selector: 'checkout-dir',
  template: `
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
            <div class="row mb-2">
              <div class="col-sm-6 text-left">
                <img src="https://image.freepik.com/free-vector/infographic-online-shopping-design_23-2147489177.jpg" style="width:75px;height:75px"/>
              </div>
              <div class="col-sm-6 text-right">
                Invoice #
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">                
                  <div><span>From:</span></div>
                  <div><strong>{{company.name}}</strong></div>                
                  <div><span>{{company.address1}}</span></div>
                  <div><span>{{company.address2}}</span></div>
                  <div><span>{{company.city}} - {{company.pin}}</span></div>
                  <div><span>Mobile:{{company.mobile}}</span></div>
                  <div><span>Mail: {{company.mail}}</span></div>
              </div>
              <div class="col-sm-6">
                <div><span>To:</span></div>
                  <div><strong>{{billingDetails.firstName}} {{billingDetails.lastName}}</strong></div>     <div><span>{{billingDetails.address1}}</span></div>
                  <div><span>{{billingDetails.address2}}</span></div>
                  <div><span>{{billingDetails.city}} - {{billingDetails.pin}}</span></div>
                  <div><span>Mobile: {{billingDetails.mobile}}</span></div>
                  <div><span>Mail: {{billingDetails.eMail}}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  `
})

export class CheckoutComponent {
  public company = companyModel;
  public invoiceDate: any = new Date();
  public cart: any = {};
  public billingDetails: any = {};
  public cartFlag: boolean = false;
  public billingFlag: boolean = false;
  constructor(
    public service: BrowserStorageServices
  ) {
    this.load();
  }
  load() {
    this.cart = this.service.get("cart");
    this.billingDetails = this.service.get("billing");
    if (this.cart == undefined) {
      this.cart = {}
    }
    if (this.billingDetails == undefined) {
      this.billingDetails = {}
    }
    this.cartFlag = Object.getOwnPropertyNames(this.cart).length > 0 ? true : false;
    this.billingFlag = Object.getOwnPropertyNames(this.billingDetails).length > 0 ? true : false;
  }
}