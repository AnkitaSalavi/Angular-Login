import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

const routes: Routes = [

  {
    path: 'register',
    component: RegistrationComponentComponent,
   
  },
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: "",
    redirectTo: '/first',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
