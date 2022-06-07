import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowUserPageRoutingModule } from './show-user-routing.module';

import { ShowUserPage } from './show-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowUserPageRoutingModule
  ],
  declarations: [ShowUserPage]
})
export class ShowUserPageModule {}
