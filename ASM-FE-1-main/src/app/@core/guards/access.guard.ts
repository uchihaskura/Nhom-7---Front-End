import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ROUTER_CONFIG} from "../config";
import {AuthService} from "../services/apis";

@Injectable({
  providedIn: 'root',
})
export class AccessGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
  }

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
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
