import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { CommonLayoutComponent } from './common/common-layout/common-layout.component';
import { LandingPageComponent } from './common/Shared/landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';

const routes: Routes = [{
  path: "user",
  component: UserLayoutComponent,
  children: [
    {
      path: "",
      loadChildren: () =>
        import("../app/user/user-layout/user-layout.module").then(
          (x) => x.UserLayoutModule
        ),
    },
  ],
},
{
  path: "admin",
  component: AdminLayoutComponent,
  children: [
    {
      path: "",
      loadChildren: () =>
        import("../app/admin/admin.module").then(
          (x) => x.AdminModule
        ),
    },
  ],
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "register",
  component: RegisterComponent
},
{
  path: "",
  component: CommonLayoutComponent
},
{
  path: "common",
  component: UserLayoutComponent,
  children: [
    {
      path: "",
      loadChildren: () =>
        import("../app/common/common.module").then(
          (x) => x.CommonModule
        ),
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule,
    BrowserModule,],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
