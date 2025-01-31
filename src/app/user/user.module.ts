import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormatricesComponent } from './formatrices/formatrices.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormationComponent } from './formation/formation.component';


@NgModule({
  declarations: [
    FormatricesComponent,
    HomeComponent,
    ContactComponent,
    FormationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
