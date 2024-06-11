import {Component, OnInit} from '@angular/core';
import {LOCALSTORAGE_KEY, ROUTER_CONFIG} from "./@core/config";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this.checkUrl();
  }

  protected checkUrl() {
    const userSession = localStorage.getItem(LOCALSTORAGE_KEY.token);
    if (userSession) {
      const basePathRoute = location.pathname;
      if (basePathRoute.includes('/auth/login')) {
        this.router.navigate([ROUTER_CONFIG.pages], {replaceUrl: true}).then();
      }
    } else {
      this.router.navigate([ROUTER_CONFIG.auth.login]).then();
    }
  }
}
