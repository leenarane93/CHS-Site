import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonHeaderComponent } from './Shared/common-header/common-header.component';
import { LandingPageComponent } from './Shared/landing-page/landing-page.component';
import { SubscriptionsComponent } from './Shared/subscriptions/subscriptions.component';

const routes: Routes = [{
    path: "",
    component: LandingPageComponent,
}, {
    path: "landing-page",
    component: LandingPageComponent,
}, {
    path: "subscription",
    component: SubscriptionsComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommonLayoutRoutingModule {

}


