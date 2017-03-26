import { Component } from '@angular/core';

import { AuthorizationService } from '../../../shared/authorization.service';

@Component({
  selector: 'login-panel',
  styleUrls: [ './login-panel.scss' ],
  templateUrl: './login-panel.html'
})

export class LoginPanelComponent {
  constructor(public authorizationService: AuthorizationService) {}
}
