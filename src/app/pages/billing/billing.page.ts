import { Component } from '@angular/core';
import { BrowserStorageServices } from './../../services/storage.service';

@Component({
  template : `
    <div class="container">
      <br>
      <div class="row">
        <div class="col-lg-12">
          <navbar></navbar>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-8">
          <billing-form></billing-form>
        </div>
        <div class="col-md-4">
        <cart-app></cart-app>
        </div>
      </div>
    </div>      
  `
})

export class BillingPage{
  result : any;
  constructor(
    public storage : BrowserStorageServices
  ){}
}