import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  formGroup!: UntypedFormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  constructor(private dialog: MatDialog,
    private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.setChangeValidate()
  }
  CloseModal() {
    this.dialog.closeAll();
  }
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'preferredtime': [null, [Validators.required,]],
      'description': [null, Validators.required],
      'fulladdress': [null, [Validators.required]],
      'email': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'contactno': [null, [Validators.required]],
      'fullname': [null, [Validators.required]]
    });
  }

  setChangeValidate() {
  }


}
