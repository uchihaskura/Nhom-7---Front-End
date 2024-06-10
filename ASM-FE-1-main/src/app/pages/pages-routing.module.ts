import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserComponent} from "./user/user.component";
import { ProductsComponent } from './products/products.component';
import {CategoriComponent } from './categori/categori.component';
import { NewComponent } from './new/new.component';
import { OrdersComponent } from './orders/orders.component';
import {CategoryAddComponent} from './category-add/category-add.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {NewAddComponent} from './new-add/new-add.component';

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
      path:'category-add',
      component:CategoryAddComponent,
      data:{breadcrumb:'category-add'}
    },
    {
      path:'category-edit',
      component:CategoryEditComponent,
      data:{breadcrumb:'category-edit'}
    },
    {
      path:'new',
      component:NewComponent,
      data:{breadcrumb:'new'}
    },
    {
      path:'new-add',
      component:NewAddComponent,
      data:{breadcrumb:'new-add'}
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
