import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { LogoComponent } from './header/logo';
import { LoginPanelComponent } from './header/login-panel';
import { BreadcrumbsComponent } from './header/breadcrumbs';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginPanelComponent,
    BreadcrumbsComponent
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
