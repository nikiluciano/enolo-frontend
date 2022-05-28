import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatchAccountPageRoutingModule } from './patch-account-routing.module';

import { PatchAccountPage } from './patch-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatchAccountPageRoutingModule
  ],
  declarations: [PatchAccountPage]
})
export class PatchAccountPageModule {}
