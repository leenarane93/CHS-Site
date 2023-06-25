import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { CommonLayoutHeaderComponent } from './shared/common-layout-header/common-layout-header.component';
import { CommonLayoutFooterComponent } from './shared/common-layout-footer/common-layout-footer.component';
import { CommonLayoutDashboardComponent } from './shared/common-layout-dashboard/common-layout-dashboard.component';
import { CommonLayoutRoutingModule } from './common-layout.routing';
import { MaterialModule } from 'src/app/Material/material/material.module';
import { ContactUsComponent } from './Modal/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    CommonLayoutComponent,
    CommonLayoutHeaderComponent,
    CommonLayoutFooterComponent,
    CommonLayoutDashboardComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    CommonLayoutRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CommonLayoutModule { }
