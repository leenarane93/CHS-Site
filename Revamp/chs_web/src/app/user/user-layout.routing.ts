import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PageCreationComponent } from './page-creation/page-creation.component';
import { ModuleMngComponent } from './module-mng/module-mng.component';

const routes: Routes = [{
    path: "",
    component: UserDashboardComponent
},
{
    path: "page-creation",
    component: PageCreationComponent
},
{
    path: "module-mng",
    component: ModuleMngComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
