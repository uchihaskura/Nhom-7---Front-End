import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { CategoriComponent } from './categori/categori.component';
import { NewComponent } from './new/new.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
  ],
  declarations: [
    PagesComponent,
    UserComponent,
    ProductsComponent,
    CategoriComponent,
    NewComponent,
    OrdersComponent,
    
  ],
  providers: []
})
export class PagesModule { }
