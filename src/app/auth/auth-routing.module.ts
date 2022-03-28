import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { 
    path:'',
    component: LoginComponent
   },

   { 
    path:'login',
    component: LoginComponent
   },
   {

    path:'signup',
    component:SignupComponent
   },
   {
     path:'register',
     component:RegisterComponent
   },
   {
     path:'forgotpassword',
     component:ForgotPasswordComponent
   },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
