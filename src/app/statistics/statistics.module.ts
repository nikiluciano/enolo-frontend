import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StatisticsPageRoutingModule } from './statistics-routing.module';
import { StatisticsPage } from './statistics.page';
import { LoadingComponent } from '../custom-components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticsPageRoutingModule
  ],
  declarations: [StatisticsPage, LoadingComponent]
})
export class StatisticsPageModule {}
