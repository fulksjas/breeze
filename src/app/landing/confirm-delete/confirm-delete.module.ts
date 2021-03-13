import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmDeleteComponent } from './confirm-delete.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [ConfirmDeleteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfirmDeleteModule { }
