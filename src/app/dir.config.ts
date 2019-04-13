import { NavBarComponent } from './navbar/navbar.component';
import { ProductsListDirectory } from './directories/products.dir';
import { SearchComponent }  from './directories/search.dir';
import { SortComponent }  from './directories/sort.dir';
import { CartComponent }  from './directories/cart.dir';
import { BillingFormcomponent }  from './directories/billing.form.dir';

import { SearchPipe } from './pipes/search.pipe';

import { BrowserStorageServices } from './services/storage.service';
import { CartServices } from './services/cart.service'

export const dirDeclarations = [
  NavBarComponent, ProductsListDirectory, SearchComponent, SortComponent, SearchPipe, CartComponent, BillingFormcomponent
];

export const services = [
  BrowserStorageServices, CartServices
];