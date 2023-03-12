import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private _toaster: ToastrService) { }

  ngOnInit(): void {
  }
  BuySubscription(amount: any) {
    this._toaster.error("You are not logged in. Please logged in for further process.");
  }
}
