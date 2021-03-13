import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateNamesComponent } from 'src/app/generateNames/generateNames.component';
import { LandingComponent } from 'src/app/landing/landing.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'generateNames', component: GenerateNamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
