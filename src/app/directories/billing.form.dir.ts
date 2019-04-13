import { Component } from '@angular/core';
import { FormBuilder, Validator } from '@angular/forms';

@Component({
  selector : 'billing-form',
  template : `
    <div class="card">
      <div class="card-header">
        <h5>Billing Information</h5>
      </div>
      <div class="card-body">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" class="form-control" placeholder="First Name" />
            </div>
            <div class="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" class="form-control" placeholder="Last Name"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="eMail">E-Mail</label>
              <input type="text" id="eMail" class="form-control" placeholder="mailid@domain.com" />
            </div>
            <div class="form-group col-md-6">
              <label for="mobile">Mobile</label>
              <input type="number" id="mobile" class="form-control" placeholder="1234567890"/>
            </div>            
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="address">Address</label>
              <input type="text" id="address" class="form-control" placeholder="Address" />
            </div>                      
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="state">State</label>
              <select class="form-control" id="state">
                <option selected>Choose</option>
                <option value="tn">Tamil Nadu</option>
                <option value="kl">Kerala</option>
                <option value="ka">Karnataka</option>
                <option value="ap">Andhra Pradesh</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="city">City</label>
              <input type="text" id="city" class="form-control" placeholder="City"/>
            </div>
            <div class="form-group col-md-4">
              <label for="pin">Pin code</label>
              <input type="number" id="pin" class="form-control" placeholder="123456"/>
            </div>            
          </div>
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-3 pt-0">Payment Type</legend>
              <div class="col-sm-2">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="r3" name="paymentType" value="upi" />
                  <label class="form-check-label" for="r3">UPI</label>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="r1" name="paymentType" value="netbanking" />
                  <label class="form-check-label" for="r1">NetBanking</label>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="r2" name="paymentType" value="card" />
                  <label class="form-check-label" for="r2">Credit/Debit Card</label>
                </div>
              </div>              
            </div>
          </fieldset>
          <div class="row">
            <div class="col-sm-6">
              <button class="btn btn-outline-primary float-left">Place Order</button>
            </div>
            <div class="col-sm-6">
              <button class="btn btn-outline-info float-right">Continue Shopping</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `
})

export class BillingFormcomponent{
  billingForm : any;
  constructor(
    public fb : FormBuilder
  ){}
  ngOnInit(){
    this.loadForm();
  }
  loadForm(){
    this.billingForm = this.fb.group({});
  }
}