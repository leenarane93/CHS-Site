import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContactUsComponent } from '../../contact-us/contact-us.component';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {

  constructor(private matDialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }
  OpenContactModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "500px";
    dialogConfig.width = "800px";
    // https://material.angular.io/components/dialog/overview
    const dialogRef = this.matDialog.open(ContactUsComponent);
  }
  NavigateForms(type: number) {
    if (type == 0)
      this.router.navigate(['login']);
    else if (type == 1)
      this.router.navigate(['register']);
  }
}
