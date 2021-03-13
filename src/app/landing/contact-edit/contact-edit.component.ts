
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/model/contact.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contactName: string;
  contactForm: FormGroup;
  rfc5322EmailRegex  = `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`;


  constructor(public dialogRef: MatDialogRef<ContactEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) { }
/**
 * with data provided, create form for users to update
 *
 * @memberof ContactEditComponent
 */
ngOnInit() {
    this.contactName = _.get(this.data, 'getFullName()', '');
    this.contactForm = new FormGroup({
      contactId: new FormControl(_.get(this.data, 'contactId', _.uniqueId())),
      firstName: new FormControl(_.get(this.data, 'firstName', ''), Validators.required),
      lastName: new FormControl(_.get(this.data, 'lastName', ''), Validators.required),
      address: new FormControl(_.get(this.data, 'address', '')),
      phone: new FormControl(_.get(this.data, 'phone', ''), Validators.pattern('[- +()0-9]+')),
      email: new FormControl(_.get(this.data, 'email', ''), Validators.required)
    });
  }
}
