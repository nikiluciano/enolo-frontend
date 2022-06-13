import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { LoadingComponent } from '../custom-components/loading/loading.component';
import { NoConnectionComponent } from '../custom-components/no-connection/no-connection.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ], 
  declarations: [LoginPage, LoadingComponent, NoConnectionComponent ] 
})
export class LoginPageModule { }
