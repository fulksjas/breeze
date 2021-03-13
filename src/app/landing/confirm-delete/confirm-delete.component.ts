import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {
  contactName: string;

  constructor( public dialogRef: MatDialogRef<ConfirmDeleteComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Contact) { } 

ngOnInit() {
  this.contactName = this.data.getFullName();
  }

}
