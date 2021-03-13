import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';

import { ConfirmDeleteComponent } from 'src/app/landing/confirm-delete/confirm-delete.component';
import { Contact } from 'src/app/model/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';
import { ContactEditComponent } from 'src/app/landing/contact-edit/contact-edit.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  contactData = new MatTableDataSource<Contact>();
  contactColumns = ['firstName', 'lastName', 'address', 'email', 'phone', 'edits'];

  constructor(private contactsService: ContactsService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }
/**
 *  setup and prepare for broadcasts of contacts
 *
 * @memberof LandingComponent
 */
ngOnInit() {
    this.contactsService.getContactsSource().subscribe((contacts: Contact[]) => {
      this.contactData = new MatTableDataSource<Contact>(contacts);
      this.contactData.paginator = this.paginator;
    });

    this.contactsService.loadContacts();
  }

  /**
   * setup our material table with pagination and sort info
   *
   * @memberof LandingComponent
   */
  ngAfterViewInit() {
    // add ngAfterViewInit hook
    this.contactData.paginator = this.paginator;
    this.sort.sort(({ id: 'firstName', start: 'asc'}) as MatSortable);
    this.contactData.sort = this.sort;
  }
  /**
   * provide access to the edit dialog.  will also be called to add new contact
   * when user is done with updates, begin process of updaitng SOR
   *
   * @param {Contact} contact
   * @memberof LandingComponent
   */
  openEditDialog(contact: Contact) {
    console.log(contact);
    const dialogRef = this.dialog.open(ContactEditComponent, { data: contact });

    dialogRef.afterClosed().subscribe((result: Contact) => {
      if (result) {
        this.contactsService.saveContact(result as Contact);
        this.snackBar.open('Contact '.concat(result.firstName.concat(' ').concat(result.lastName)).concat(' has been updated'), 'X', {verticalPosition: 'top'});
      }
    });
  }

/**
 *  verify the user wants this contact removed. if confirmed remove and alert
 *
 * @param {Contact} contact
 * @memberof LandingComponent
 */
openDeleteDialog(contact: Contact) {
    console.log(contact);
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, { data: contact });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactsService.deleteContact(contact);
        this.snackBar.open('Contact '.concat(contact.getFullName()).concat(' has been deleted'), 'X', {verticalPosition: 'top'});
      }
    });
  }
}
