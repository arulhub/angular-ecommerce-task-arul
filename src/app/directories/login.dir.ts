import { Component } from '@angular/core';

@Component({
  selector : 'login-app',
  template : `
  <form clas="form-signin">
    <div class="text-center mb-4">
      <img class="mb-4" src="https://image.freepik.com/free-vector/infographic-online-shopping-design_23-2147489177.jpg" width="72" height="72"/>
      <h1 class="h4 mb-3 font-weight-normal">Sign-In to Shoppee Kart</h1>
    </div>
    <div class="form-label-group">
      <label for="userName">UserName</label>
      <input class="form-control" id="userName" placeholder="UserID" type="text"/> 
    </div>
    <div class="form-label-group">
      <label for="pass">Password</label>
      <input class="form-control" id="pass" placeholder="Password" type="password"/> 
    </div>
    <button class="btn btn-outline-info btn-lg btn-block">Login</button> 
  </form>
  `,
  styleUrls : ['./login.dir.css']
})

export class LoginComponent{

}