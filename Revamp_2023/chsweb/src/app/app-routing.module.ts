import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './user/components/user-layout/user-layout.component';
import { MaterialModule } from './material/material.module';

const routes: Routes = [{
  path: "user",
  component: UserLayoutComponent,
  children: [
    {
      path: "",
      loadChildren: () =>
        import("./user/user/user.module").then(
          (x) => x.UserModule
        ),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
