import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CookieService } from 'ngx-cookie';

import { API_URL } from './constants';

const TOKEN = 'app_token';
export const USER_ID = 'user_id';

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
      .then(this.onSuccessLogIn.bind(this));
  }

  public logOut(): void {
    this.cookieService.remove(TOKEN);
    this.cookieService.remove(USER_ID);
  }

  public getToken(): string {
    return this.cookieService.get(TOKEN);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private onSuccessLogIn(response): void {
    const data = response.json();

    this.cookieService.put(TOKEN, data.id);
    this.cookieService.put(USER_ID, data.userId);
  }
}
