import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import { UserService } from '../services/user.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})


export class SettingsPage implements OnInit {

  user:any;
  currentAdmin=false;
  contentLoaded=false;

  constructor(public userService : UserService, public WineService : WineService) { }


  ngOnInit() {
  this.getUser
   this.showAdmin()

  }

   async showAdmin(){
     if (this.user){
     this.currentAdmin=true 
    }

   }


    async getUser(username:string) {
      await this.userService.getUser(username).then(
        (res: any) => {
          if (res) {
            this.contentLoaded = true
            this.user = res
            console.log(JSON.stringify(this.user))
  
          } else {
  
        
          }

          console.log(this.user)
        });
    }


  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

}
