import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CookieService } from 'ngx-cookie';

import { API_URL } from './constants';
import {
  AuthorizationService,
  USER_ID
} from './authorization.service';

@Injectable()
export class UserService {
  public info: Object;

  constructor(
    private http: Http,
    private cookieService: CookieService,
    private authorizationService: AuthorizationService
  ) {}

  public getUserInfo(): Promise<any> {
    const id = this.cookieService.get(USER_ID);
    const token = this.authorizationService.getToken();

    return this.http
      .get(`${ API_URL }/users/${ id }?access_token=${ token }`)
      .toPromise()
      .then((response) => {
        this.info = response.json();
      });
  }
}
