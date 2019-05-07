import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BaseComponent} from './base/base.component';
import {ContactListComponent} from './contact-list/contact-list.component';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'contacts', component: ContactListComponent},
  //{path: 'posts/:id', component: PostsDetailComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
