import { RouterModule, Routes } from '@angular/router';

import { ProductsPage } from './pages/products/products.page';
import { BillingPage } from './pages/billing/billing.page';
import { CheckoutPage } from './pages/checkout/checkout.page';

const appRoutes : Routes = [
  { path : 'products', component : ProductsPage },
  { path : 'billing', component : BillingPage },
  { path : 'checkout', component : CheckoutPage },
  { path : '', redirectTo : '/products', pathMatch : 'full'}
]

export const RouterConfig = RouterModule.forRoot(appRoutes,{});
export const RouterDeclaration = [ ProductsPage, BillingPage, CheckoutPage ];