import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [LandingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingModule { }
