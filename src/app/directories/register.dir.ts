import { Component } from '@angular/core';

@Component({
  selector : 'register-app',
  template : `
    <div class="card">
      <div class="card-header">
        <h5>Register to Shoppee Kart</h5>
      </div>
      <div class="card-body">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="firstName">First Name</label>
              <input 
                id="firstName"
                class="form-control"
                placeholder="First Name" 
                formControlName="firstName"
                type="text"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input 
                id="lastName"
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
                id="email"
                class="form-control"
                placeholder="mail@domain.com" 
                formControlName="email"
                type="text"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="mobile">Mobile</label>
              <input 
                id="mobile"
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
                id="userID"
                class="form-control"
                placeholder="User ID" 
                formControlName="userID"
                type="text"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="city">City</label>
              <input 
                id="city"
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
                id="password"
                class="form-control"
                placeholder="Password" 
                formControlName="password"
                type="password"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="confirmPass">Confirm Password</label>
              <input 
                id="confirmPass"
                class="form-control"
                placeholder="Confirm Password" 
                formControlName="confirmPass"
                type="password"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  styles : [`

  `]
})

export class RegisterComponent{

}