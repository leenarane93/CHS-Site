import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutDashboardComponent } from './shared/common-layout-dashboard/common-layout-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [{
    path: "",
    component: CommonLayoutDashboardComponent
}, {
    path: "about-us",
    component: AboutUsComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommonLayoutRoutingModule { }
