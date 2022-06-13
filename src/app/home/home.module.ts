import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SwiperModule } from  'swiper/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { LoadingComponent } from '../custom-components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [HomePage, LoadingComponent]
})
export class HomePageModule {}
