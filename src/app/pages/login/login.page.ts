import { Component } from '@angular/core';

@Component({
  template : `
  <div class="d-flex justify-content-center align-middle">
    <div class="card" style="width:50%">
      <div class="card-header">
        Login Page
      </div>
      <div class="card-body">
        <form clas="form-inline">
          <div class="form-group row">
            <label for="userName" class="col-sm-2">UserName</label>
            <input class="form-control col-sm-4" id="userName" type="text"/> 
          </div>
          <div class="form-group row">
            <label for="pass" class="col-sm-2">Password</label>
            <input class="form-control col-sm-4" id="pass" type="password"/> 
          </div>
        </form>
      </div>
    </div>
  </div>
  `
})

export class LoginPage{

}