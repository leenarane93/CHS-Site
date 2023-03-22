import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserHeaderComponent } from './Shared/user-header/user-header.component';
import { UserFooterComponent } from './Shared/user-footer/user-footer.component';
import { UserLayoutRoutingModule } from './user-layout.routing';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    UserLayoutComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserDashboardComponent,
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule
  ]
})
export class UserModule { }
