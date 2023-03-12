import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MaterialExampleModule } from 'src/app/material.module';
import { UserFooterComponent } from './shared/user-footer/user-footer.component';
import { CustomerFeedbackComponent } from '../customer-activity/customer-feedback/customer-feedback.component';



@NgModule({
  declarations: [
    UserLayoutComponent,
    HeaderComponent,
    UserDashboardComponent,
    UserFooterComponent,
    CustomerFeedbackComponent
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    MaterialExampleModule
  ]
})
export class UserLayoutModule { }
