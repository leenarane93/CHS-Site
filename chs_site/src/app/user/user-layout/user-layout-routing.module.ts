import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFeedbackComponent } from '../customer-activity/customer-feedback/customer-feedback.component';
import { NotificationPanelComponent } from '../customer-activity/notification-panel/notification-panel.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [{
  path: "user-dashboard",
  component: UserDashboardComponent,
},
{
  path: "",
  component: UserDashboardComponent,
},
{
  path: "user-feedback",
  component: CustomerFeedbackComponent,
},
{
  path: "notification",
  component: NotificationPanelComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule {

}


