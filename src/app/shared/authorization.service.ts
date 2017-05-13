import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CookieService } from 'ngx-cookie';

import { API_URL } from './constants';

const TOKEN_NAME = 'app_token';

@Injectable()
export class AuthorizationService {
  constructor(
    private http: Http,
    private cookieService: CookieService
  ) {}

  public logIn(username: string, password: string) {
    return this.http
      .post(`${ API_URL }/users/login`, {
        username,
        password
      })
      .toPromise()
      .then(this.setToken.bind(this));
  }

  public logOut(): void {
    this.cookieService.remove(TOKEN_NAME);
  }

  public isAuthorized(): boolean {
    return !!this.cookieService.get(TOKEN_NAME);
  }

  private setToken(response): void {
    this.cookieService.put(TOKEN_NAME, response.json().id);
  }
}
