import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {ApiService} from "../common";
import {UserProfile} from "../../model/user-info.model";
import {API_ENDPOINT} from "../../config/api-endpoint.config";

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {

  constructor(
    private _http: HttpClient,
  ) {
    super(_http);
  }

  updateProfile(): Observable<UserProfile[]>  {
    return this.get(API_ENDPOINT.auth.updateProfile);
  }
}
