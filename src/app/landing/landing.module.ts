import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [LandingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingModule { }
