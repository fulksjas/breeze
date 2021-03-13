import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table/table-data-source';

import { Contact } from 'src/app/model/contact.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  contactData = new MatTableDataSource();

  constructor() { }

  ngOnInit() {
  }

}
