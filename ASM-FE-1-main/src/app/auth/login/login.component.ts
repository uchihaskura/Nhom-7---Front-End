import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SpinnerService} from "../../@theme/components/spinner/spinner.service";
import {AuthService} from "../../@core/services/apis";
import {LocalStorageService} from "../../@core/services/common";
import {LOCALSTORAGE_KEY, ROUTER_CONFIG} from "../../@core/config";
import {IAlertMessage} from "../../@theme/components/alert/ngx-alerts.component";
import { finalize } from "rxjs";

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  alertMessages: IAlertMessage[] = [];

  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private auth: AuthService,
    private storageService: LocalStorageService,
  ) {
  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])

    });

  }

  onSubmit() {
    // if(this.loginForm.valid) {
    //   this.spinner.show();
    //   this.auth.login(this.loginForm.value).pipe(
    //     finalize(() => this.spinner.hide())
    //   ).subscribe({
    //     next:this.handleLoginSuccess.bind(this),
    //     error: this.handleLoginFailed.bind(this)
    //   })
    // }
    this.router.navigate([ROUTER_CONFIG.pages]).then();
  }

  protected handleLoginSuccess(res) {
    this.storageService.setItem(LOCALSTORAGE_KEY.userInfo, res.name);
    this.storageService.setItem(LOCALSTORAGE_KEY.token, res.token);
    this.router.navigate([ROUTER_CONFIG.pages]).then();
    this.spinner.hide();
  }

  protected handleLoginFailed() {
    this.spinner.hide();
    this.alertMessages = [{status: 'danger', message: 'Tài khoản hoặc mật khẩu không chính xác'}];
  }
}
