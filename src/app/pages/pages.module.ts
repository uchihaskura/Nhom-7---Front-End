import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { CategoriComponent } from './categori/categori.component';
import { NewComponent } from './new/new.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { NewEditComponent } from './new-edit/new-edit.component';
import { NewAddComponent } from './new-add/new-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';



@NgModule({
  imports: [
    FormsModule,
   CommonModule,
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
    CategoryAddComponent,
    NewEditComponent,
    NewAddComponent,
    CategoryEditComponent,
    OrderDetailComponent,
    
  ],
  providers: [CategoriComponent]
})
export class PagesModule { }
