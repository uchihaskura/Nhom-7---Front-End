import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserComponent} from "./user/user.component";
import { ProductsComponent } from './products/products.component';
import {CategoriComponent } from './categori/categori.component';
import { NewComponent } from './new/new.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {breadcrumb: 'Dashboard'},
    },
    {
      path: 'users',
      component: UserComponent,
      data: {breadcrumb: 'Users'},
    },
    {
      path:'products',
      component:ProductsComponent,
      data:{breadcrumb:'Products'}
    },
    {
      path:'categori',
      component:CategoriComponent,
      data:{breadcrumb:'categori'}
    },
    {
      path:'new',
      component:NewComponent,
      data:{breadcrumb:'new'}
    },
    {
      path:'orders',
      component:OrdersComponent,
      data:{breadcrumb:'orders'}
    }
    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
