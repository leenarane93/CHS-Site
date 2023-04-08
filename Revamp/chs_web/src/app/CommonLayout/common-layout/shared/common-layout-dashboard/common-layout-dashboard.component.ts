import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsComponent } from '../../Modal/contact-us/contact-us.component';

@Component({
  selector: 'app-common-layout-dashboard',
  templateUrl: './common-layout-dashboard.component.html',
  styleUrls: ['./common-layout-dashboard.component.css']
})
export class CommonLayoutDashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  ngOnInit(): void {
  }
  openDialog(): void {
    this.dialog.open(ContactUsComponent);
  }
}
