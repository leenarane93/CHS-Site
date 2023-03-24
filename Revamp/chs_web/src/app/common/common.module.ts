import { NgModule } from '@angular/core';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { CommonHeaderComponent } from './Shared/common-header/common-header.component';
import { CommonFooterComponent } from './Shared/common-footer/common-footer.component';
import { CommonDashboardComponent } from './common-dashboard/common-dashboard.component';
import { CommonLayoutRoutingModule } from './common-layout.routing';



@NgModule({
  declarations: [
    CommonLayoutComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    CommonDashboardComponent
  ],
  imports: [
    CommonLayoutRoutingModule
  ]
})
export class CommonModule { }
