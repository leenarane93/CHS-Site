import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserHeaderComponent } from './Shared/user-header/user-header.component';
import { UserFooterComponent } from './Shared/user-footer/user-footer.component';
import { UserLayoutRoutingModule } from './user-layout.routing';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { PageCreationComponent } from './page-creation/page-creation.component';
import { ModuleMngComponent } from './module-mng/module-mng.component';
import { MaterialModule } from '../Material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserLayoutComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserDashboardComponent,
    UserCreationComponent,
    PageCreationComponent,
    ModuleMngComponent,
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
