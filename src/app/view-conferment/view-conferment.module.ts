import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewConfermentPageRoutingModule } from './view-conferment-routing.module';

import { ViewConfermentPage } from './view-conferment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewConfermentPageRoutingModule
  ],
  declarations: [ViewConfermentPage]
})
export class ViewConfermentPageModule {}
