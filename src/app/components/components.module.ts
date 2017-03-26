import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { LogoComponent } from './header/logo';
import { LoginPanelComponent } from './header/login-panel';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginPanelComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class ComponentsModule {}
