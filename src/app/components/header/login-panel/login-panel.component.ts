import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../../shared/authorization.service';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'login-panel',
  styleUrls: [ './login-panel.scss' ],
  templateUrl: './login-panel.html'
})

export class LoginPanelComponent implements OnInit {
  constructor(
    public authorizationService: AuthorizationService,
    public userService: UserService,
    private router: Router
  ) {}

  public ngOnInit() {
    if (this.authorizationService.isLoggedIn()) {
      this.userService.getUserInfo();
    }
  }

  public logOut() {
    this.authorizationService.logOut();
    this.router.navigate([ '/login' ]);
  }
}
