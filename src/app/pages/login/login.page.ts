import { Component } from '@angular/core';

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
        <div class="col-md-12">
          <login-app></login-app>
        </div>        
      </div>
    </div>
  `
})

export class LoginPage{

}