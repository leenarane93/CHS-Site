import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonDashboardComponent } from './common-dashboard/common-dashboard.component';

const routes: Routes = [{
    path: "",
    component: CommonDashboardComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommonLayoutRoutingModule { }
