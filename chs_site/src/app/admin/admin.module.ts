import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MaterialExampleModule } from '../material.module';
import { AdminLayoutRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    MaterialExampleModule
  ]
})
export class AdminModule { }
