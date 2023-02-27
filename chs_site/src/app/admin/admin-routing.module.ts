import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SocietyRegisterComponent } from './Admin-Modal/Society/society-register/society-register.component';
import { SubscriptionMasterComponent } from './Admin-Modal/Subscription/subscription-master/subscription-master.component';
import { SubsListComponent } from './Admin-Modal/Subscription/subs-list/subs-list.component';

const routes: Routes = [{
  path: "",
  component: AdminDashboardComponent,
}, {
  path: "admin-layout",
  component: AdminDashboardComponent,
},
{
  path: "society-registration",
  component: SocietyRegisterComponent,
},
{
  path: "subs-master",
  component: SubscriptionMasterComponent,
},
{
  path: "subs-list",
  component: SubsListComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule {

}
