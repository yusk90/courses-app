import { NgModule } from '@angular/core';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule {}
