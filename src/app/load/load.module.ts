import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoadPageRoutingModule } from './load-routing.module';


import { LoadPage } from './load.page';
import { LoadingComponent
 } from '../custom-components/loading/loading.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [LoadPage, LoadingComponent]
})
export class LoadPageModule {}
