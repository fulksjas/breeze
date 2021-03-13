import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { GenerateNamesComponent } from './generateNames.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [GenerateNamesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GenerateNamesModule { }
