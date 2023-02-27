import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { subscriptionmaster } from 'src/app/core/Models/subscriptionmaster';
import { SubsKeyModalComponent } from '../subs-key-modal/subs-key-modal.component';

@Component({
  selector: 'app-subscription-master',
  templateUrl: './subscription-master.component.html',
  styleUrls: ['./subscription-master.component.css']
})
export class SubscriptionMasterComponent implements OnInit {
  subscriptionMasterForm!: FormGroup;
  SubsModel: subscriptionmaster;
  constructor(public matDialog: MatDialog) {
    this.SubsModel = {} as subscriptionmaster;
  }

  ngOnInit(): void {
    this.subscriptionMasterForm = new FormGroup({
      id: new FormControl("", [Validators.required]),
      subcode: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      description: new FormControl("", [Validators.required]),
      keypoints: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required, Validators.pattern("^[1-9]\d*(\.\d+)?$")]),
      isdiscount: new FormControl("", [Validators.required]),
      totaldiscount: new FormControl("", [Validators.required, Validators.pattern("^[1-9]\d*(\.\d+)?$")]),
      finalamount: new FormControl("", [Validators.required, Validators.pattern("^[1-9]\d*(\.\d+)?$")]),
      isactive: new FormControl(false, Validators.required),
    })
  }

  OpenKeyPanel() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "500px";
    dialogConfig.width = "800px";
    // https://material.angular.io/components/dialog/overview
    const dialogRef = this.matDialog.open(SubsKeyModalComponent);
  }

}
