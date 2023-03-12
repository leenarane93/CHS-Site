import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialExampleModule } from '../material.module';
import { CommonLayoutRoutingModule } from './common-layout.routing.module';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommonHeaderComponent } from './Shared/common-header/common-header.component';
import { LandingPageComponent } from './Shared/landing-page/landing-page.component';

@NgModule({
  declarations: [
    CommonLayoutComponent,
    LandingPageComponent,
    CommonHeaderComponent,
    ContactUsComponent
  ],
  imports: [
    CommonLayoutRoutingModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule],
  exports: [],
  entryComponents: [ContactUsComponent]
})
export class CommonModule { }