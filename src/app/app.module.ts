import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { dirDeclarations, services } from './dir.config';
import { RouterConfig,RouterDeclaration  } from './router.config';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterConfig ],
  declarations: [ AppComponent, dirDeclarations, RouterDeclaration ],
  providers : [ services ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
