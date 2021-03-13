import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Contact } from 'src/app/model/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  dataSource = new MatTableDataSource<Contact>();
  columnsToDisplay = ['id', 'firstName', 'lastName'];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.getContactsSource().subscribe((contacts: Contact[]) => {
      this.dataSource = new MatTableDataSource<Contact>(contacts);
    });

    this.contactsService.loadContacts();
  }

  ngAfterViewInit() {
    // add ngAfterViewInit hook
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
   }
}
