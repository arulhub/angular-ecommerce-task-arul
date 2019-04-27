import { Component } from '@angular/core';

@Component({
  template : `
    <div class="container">
    <br>
      <div class="row">
        <div class="col-lg-12">
          <navbar
            (checkoutFlag)="checkoutFlag=$event"
          ></navbar>
        </div>
      </div>
      <br>
      <checkout-dir
        *ngIf="checkoutFlag"
      ></checkout-dir>
    </div>
  `
})

export class CheckoutPage{
  public checkoutFlag : boolean = true;
}