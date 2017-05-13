import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../shared/authorization.service';

@Component({
  selector: 'login',
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html'
})

export class LoginComponent {
  public username: string;
  public password: string;
  public isLoginDataIncorrect: boolean = false;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  public logIn(): void {
    this.isLoginDataIncorrect = false;
    this.authorizationService
      .logIn(this.username, this.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }

  private onLoginSuccess(): void {
    this.router.navigate(['/']);
  }

  private onLoginFail(): void {
    this.isLoginDataIncorrect = true;
  }
}
