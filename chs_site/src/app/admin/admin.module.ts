import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MaterialExampleModule } from '../material.module';
import { AdminLayoutRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SocietyRegisterComponent } from './Admin-Modal/Society/society-register/society-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriptionMasterComponent } from './Admin-Modal/Subscription/subscription-master/subscription-master.component';
import { SubsKeyModalComponent } from './Admin-Modal/Subscription/subs-key-modal/subs-key-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { SubsListComponent } from './Admin-Modal/Subscription/subs-list/subs-list.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    SocietyRegisterComponent,
    SubscriptionMasterComponent,
    SubsKeyModalComponent,
    SubsListComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [SubsKeyModalComponent]
})
export class AdminModule { }
