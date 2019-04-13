import { Component } from '@angular/core';
import { productsModel } from './../../model/products.model';

@Component({
  template : `
    <div class="container">
      <br>
      <div class="row">
        <div class="col-lg-12">
          <navbar></navbar>
        </div>
      </div>         
      <div class="row mt-3">
        <div class="col-md-7">
          <search-app (searchKey)="searchKeyToPipe=$event"></search-app>
        </div>
        <div class="col-md-5">
          <sort-app (sortType)="sortTypeToPipe=$event"></sort-app>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <product-list
            [_data]="obj|search : searchKeyToPipe : sortTypeToPipe"
            (cartFlag)="cartFlag = $event"
          >
          </product-list>
        </div>
        <div class="col-md-5">
          <cart-app
            *ngIf="cartFlag"
          ></cart-app>
        </div>
      </div>         
    </div>
  `
})

export class ProductsPage{
  public obj : any;
  public searchKeyToPipe : string;
  public sortTypeToPipe : string;
  public cartFlag : boolean = true;
  constructor(){
    this.obj = productsModel;
  }
}