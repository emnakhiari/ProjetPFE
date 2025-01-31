import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormatricesComponent } from './formatrices/formatrices.component';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut
  { path: 'home', component: HomeComponent }, // Composant principal
  { path: 'formation', component: FormationComponent }, // Composant principal
  { path: 'formatrices', component: FormatricesComponent },
  { path: 'contact', component: ContactComponent }, // Composant principal
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
