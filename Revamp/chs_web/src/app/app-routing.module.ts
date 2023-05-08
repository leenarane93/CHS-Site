import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './CommonLayout/common-layout/common-layout/common-layout.component';
import { MaterialModule } from './Material/material/material.module';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout/admin-layout.component';

const routes: Routes = [{
  path: "user",
  component: UserLayoutComponent,
  children: [
    {
      path: "",
      loadChildren: () =>
        import("../app/user/user.module").then(
          (x) => x.UserModule
        ),
    },
  ],
},
{
  path: "common",
  component: CommonLayoutComponent,
  children: [
    {
      path: "",
      loadChildren: () =>
        import("../app/CommonLayout/common-layout/common-layout.module").then(
          (x) => x.CommonLayoutModule
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
        import("./admin-layout/admin-layout.module").then(
          (x) => x.AdminLayoutModule
        ),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
