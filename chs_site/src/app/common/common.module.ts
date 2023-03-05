import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialExampleModule } from '../material.module';
import { CommonLayoutRoutingModule } from './common-layout.routing.module';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { CommonHeaderComponent } from './Shared/common-header/common-header.component';
import { LandingPageComponent } from './Shared/landing-page/landing-page.component';

@NgModule({
  declarations: [
    CommonLayoutComponent,
    LandingPageComponent,
    CommonHeaderComponent,
  ],
  imports: [CommonLayoutRoutingModule, MaterialExampleModule],
  exports: [],
})
export class CommonModule { }