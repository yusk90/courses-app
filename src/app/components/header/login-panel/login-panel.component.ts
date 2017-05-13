import {
  Component,
  OnInit
} from '@angular/core';

import { AuthorizationService } from '../../../shared/authorization.service';

@Component({
  selector: 'login-panel',
  styleUrls: [ './login-panel.scss' ],
  templateUrl: './login-panel.html'
})

export class LoginPanelComponent implements OnInit {
  public isAuthorized: boolean;

  constructor(public authorizationService: AuthorizationService) {}

  public ngOnInit() {
    this.isAuthorized = this.authorizationService.isAuthorized();
  }
}
