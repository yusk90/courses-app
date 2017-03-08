import { NgModule } from '@angular/core';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { LogoComponent } from './header/logo';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ]
})
export class ComponentsModule {}
