import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContactUsComponent } from '../../contact-us/contact-us.component';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  GoToSubsModel() {
    this.router.navigate(['common/subscription']);
  }
  OpenContactModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "600px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const dialogRef = this.matDialog.open(ContactUsComponent);
  }
}
