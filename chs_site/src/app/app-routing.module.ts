import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,
    BrowserModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
