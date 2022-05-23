import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertConfermentPageRoutingModule } from './insert-conferment-routing.module';

import { InsertConfermentPage } from './insert-conferment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertConfermentPageRoutingModule
  ],
  declarations: [InsertConfermentPage]
})
export class InsertConfermentPageModule {}
