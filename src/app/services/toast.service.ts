import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

/**
 * Service created to provide a toast
*/
export class ToastService {
  constructor(public toastController: ToastController) { }


  /**
   * 
   * @param infoMessage message to be displayed in the toast
   */
  async presentToast(infoMessage: string) {
    const toast = await this.toastController.create({
      message: infoMessage,
      duration: 2000
    });
    toast.present();
  }
}