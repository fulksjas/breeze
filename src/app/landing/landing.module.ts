import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { ConfirmDeleteModule } from 'src/app/landing/confirm-delete/confirm-delete.module';
import { ContactEditModule } from 'src/app/landing/contact-edit/contact-edit.module';

import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    ConfirmDeleteModule,
    ContactEditModule,
    
  ],
  declarations: [LandingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingModule { }
