import { Injectable } from '@angular/core';

const NAME = 'admin';
const PASSWORD = '1';

@Injectable()
export class AuthorizationService {
  public isAuthorized: boolean = false;

  public login(name: string, password: string) {
    return new Promise((resolve, reject) => {
      if (name === NAME && password === PASSWORD) {
        this.isAuthorized = true;
        resolve();
      }
      if (name !== NAME) {
        reject('User is not found.');
      }
      if (password !== PASSWORD) {
        reject('Password is incorrect.');
      }
    });
  }

  public logoff(): void {
    this.isAuthorized = false;
  }
}
