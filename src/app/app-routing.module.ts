import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Register/login/login.component';
import { RegisterComponent } from './Register/register/register.component';

const routes: Routes = [
  {path: '', component: RegisterComponent },
  {path: "login",component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }