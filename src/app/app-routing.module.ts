import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('src/app/user/user-routing.module').then(m => m.UserRoutingModule) },
  { path: 'admin', loadChildren: () => import('src/app/admin/admin-routing.module').then(m => m.AdminRoutingModule) },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
