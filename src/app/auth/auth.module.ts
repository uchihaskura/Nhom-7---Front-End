import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginModule} from "./login/login.module";
import {AuthComponent} from "./auth.component";
import {ThemeModule} from "../@theme/theme.module";

@NgModule({
  imports: [
    AuthRoutingModule,
    LoginModule,
    ThemeModule
  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule {
}
