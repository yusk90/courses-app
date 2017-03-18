import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { LogoComponent } from './header/logo';
import { LoginPanelComponent } from './header/login-panel';
import { ModalComponent } from './modal';
import { ModalService } from './modal/modal.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginPanelComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginPanelComponent,
    ModalComponent
  ],
  providers: [
    ModalService
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {}
