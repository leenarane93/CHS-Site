import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
