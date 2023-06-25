import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './shared/admin-header/admin-header.component';
import { AdminFooterComponent } from './shared/admin-footer/admin-footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutRoutingModule } from './admin-layout.routing.module';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
