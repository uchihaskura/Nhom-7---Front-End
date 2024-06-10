import {NgModule} from "@angular/core";
import {NbButtonModule, NbCardModule, NbLayoutModule} from "@nebular/theme";
import {ErrorRoutingModule} from "./error-routing.module";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ErrorComponent} from "./error.component";

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    ErrorRoutingModule,
    NbLayoutModule,
  ],
  declarations: [
    ErrorComponent,
    NotFoundComponent,
  ]
})
export class ErrorModule {
}
