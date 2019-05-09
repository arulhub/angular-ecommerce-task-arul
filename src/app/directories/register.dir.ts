import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector : 'register-app',
  template : `
    <div class="card">
      <div class="card-header">
        <h5>Register to Shoppee Kart</h5>
      </div>
      <div class="card-body">
        <form [formGroup]="registerForm" (ngSubmit)="sendDetails()">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstName">First Name</label>
              <input 
                class="form-control"
                placeholder="First Name" 
                formControlName="firstName"
                type="text"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input 
                class="form-control"
                placeholder="Last Name" 
                formControlName="lastName"
                type="text"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email">Email ID</label>
              <input 
                class="form-control"
                placeholder="mail@domain.com" 
                formControlName="email"
                type="text"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="mobile">Mobile</label>
              <input 
                class="form-control"
                placeholder="1234567890" 
                formControlName="mobile"
                type="number"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="userID">User ID</label>
              <input 
                class="form-control"
                placeholder="User ID" 
                formControlName="userID"
                type="text"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="city">City</label>
              <input 
                class="form-control"
                placeholder="City" 
                formControlName="city"
                type="text"
              />
            </div>            
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="password">Password</label>
              <input                 
                class="form-control"
                placeholder="Password" 
                formControlName="password"
                type="password"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="confirmPass">Confirm Password</label>
              <input                 
                class="form-control"
                placeholder="Confirm Password" 
                formControlName="confirmPass"
                type="password"
              />
            </div>
          </div>
          <div class="form-row">
            <button class="btn btn-outline-info">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles : [`

  `]
})

export class RegisterComponent{
  public registerForm : any;
  constructor(
    public fb : FormBuilder
  ){  }
  ngOnInit(){
    this.loadForm();
  }
  loadForm(){
    this.registerForm = this.fb.group({
      firstName : [ '', [ Validators.required ] ],
      lastName : [ '', [ Validators.required ] ],
      email : [ '', [ Validators.required, Validators.email ] ],
      mobile : [ '', [ Validators.required ] ],
      userID : [ '', [ Validators.required ] ],
      city : [ '', [ Validators.required ] ],
      password : [ '', [ Validators.required ] ],
      confirmPass : [ '', [ Validators.required ] ],
    });
  }
  sendDetails(){
    
  }
}