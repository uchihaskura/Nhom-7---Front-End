import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "../services/apis";
import {ROUTER_CONFIG} from "../config";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
  }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate([ROUTER_CONFIG.auth.pages]).then();
      return false;
    }
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
