import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './common/common-layout/common-layout.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';

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
        import("../app/common/common.module").then(
          (x) => x.CommonModule
        ),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
