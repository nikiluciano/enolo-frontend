import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from '../custom-components/loading/loading.component';

import { ViewConfermentPageRoutingModule } from './view-conferment-routing.module';

import { ViewConfermentPage } from './view-conferment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewConfermentPageRoutingModule
  ],
  declarations: [ViewConfermentPage, LoadingComponent]
})
export class ViewConfermentPageModule {}
