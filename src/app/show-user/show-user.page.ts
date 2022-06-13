import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { WineService } from '../services/wine.service';
import { MenuController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/DataService';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.page.html',
  styleUrls: ['./show-user.page.scss'],
})


/**
 * Page where an user can handle role of other workers
 */
export class ShowUserPage implements OnInit {



  currentAdmin: any;
  user: any;
  contentLoaded = false;
  workers = [];
  values = [];
  loading = false

  constructor(public userService: UserService,
    private menu: MenuController,
    private alertCtrl: AlertController,
    private dataService: DataService,
    private toastService: ToastService) {

  }


  ngOnInit() {
    this.getAllWorkers();
  }

  /**
   * retrieve from DB list of all workers.
   * If the promise is resolved, list will be sorted to show
   * on the top the users that are admin
   * 
   */

  async getAllWorkers() {
    this.loading = true;
    this.userService.getWorkers()
      .then((res) => {
        this.workers = res;
        this.workers.sort((a, b) => (a.role > b.role) ? 1 : ((b.role > a.role) ? -1 : 0))
        this.values = []
        this.workers.forEach((element) => {
          if (element.role == 'ADMIN')
            this.values.push(true)
          else
            this.values.push(false)

        })
        this.loading = false
      })
      .catch((err) => {

        //TODO: add toast
      })
  }

  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
    this.getAllWorkers();
  }


  /**
   * 
   * @param role current role of the user
   * @param username username of the user to change the role
   * @param switchValue value to reset the toggle in case the user gives up
   * @param index position of the switch value
   */
  async changeRole(role: string, username: string, switchValue: boolean, index: number) {
    const alert = await this.alertCtrl.create({
      header: 'Attenzione!',
      message: 'Sei sicuro di cambiare lo stato di' + username + '?',
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            this.values[index] = switchValue
          }
        }, {
          text: 'Conferma',
          id: 'confirm-button',
          handler: () => {
            if (role == "ADMIN") {
              let patchData = {
                username: username,
                role: 'WORKER'
              }
              this.userService.changeWorkerRole(this.dataService.getUser().username, patchData)
                .then(() => {
                  this.getAllWorkers()
                }).catch((err) => {
                  this.toastService.presentToast(err.msg)
                  this.values[index] = switchValue

                })
            } else {

              let patchData = {
                username: username,
                role: 'ADMIN'
              }
              this.userService.changeWorkerRole(this.dataService.getUser().username, patchData)
                .then(() => {
                  this.getAllWorkers()
                }).catch((err) => {
                  this.toastService.presentToast(err.msg)
                  this.values[index] = switchValue

                })
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
