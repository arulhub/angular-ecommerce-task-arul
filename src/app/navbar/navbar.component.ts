import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector : 'navbar',
  template : `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" routerLink = "/products">
        <img src = 'https://image.freepik.com/free-vector/infographic-online-shopping-design_23-2147489177.jpg' style="width:50px;height:50px"/>
        Shoppee Kart
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" routerLink = "/products">Products <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink = "/billing">Billing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink = "/checkout" (click)="sendFlag()">Checkout</a>
          </li>
        </ul>
      </div>
    </nav>
  `
})

export class NavBarComponent{
  @Output() checkoutFlag : EventEmitter<boolean> = new EventEmitter;

  sendFlag(){
    this.checkoutFlag.emit(false);
    setTimeout( ()=>{ this.checkoutFlag.emit(true) } );
  }
}