import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../shared/authorization.service';

@Component({
  selector: 'login',
  styleUrls: [ './login.scss' ],
  templateUrl: './login.html'
})

export class LoginComponent {
  public name: string;
  public password: string;

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  public login(): void {
    if (!this.name || !this.password) {
      alert('Name and password are required.');
      return;
    }
    this.authorizationService
      .login(this.name, this.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }

  private onLoginSuccess(): void {
    this.router.navigate(['/']);
  }

  private onLoginFail(error: string): void {
    alert(error);
  }
}
