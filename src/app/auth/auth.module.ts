import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { ItemsComponent } from '../items/items.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
    HttpClientModule
  ],
  exports: [],
  providers: [AuthService]
})
export class AuthModule {

}
