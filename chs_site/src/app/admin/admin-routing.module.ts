import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SocietyRegisterComponent } from './society-register/society-register.component';

const routes: Routes = [{
    path: "",
    component: AdminDashboardComponent,
  },{
    path: "admin-layout",
    component: AdminDashboardComponent,
  },
  {
    path: "society-registration",
    component: SocietyRegisterComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { 
  
}
