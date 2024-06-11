import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }
