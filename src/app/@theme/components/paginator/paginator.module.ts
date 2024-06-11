import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PaginatorComponent} from './paginator.component';
import {NbButtonModule, NbIconModule} from "@nebular/theme";

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbIconModule,
    NbButtonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    PaginatorComponent
  ]
})

export class PaginatorModule {
}
