import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { UserService } from '../services/user.service';
import { WineService } from '../services/wine.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.page.html',
  styleUrls: ['./show-user.page.scss'],
})
export class ShowUserPage implements OnInit {



currentAdmin:any;
user:any;
contentLoaded=false;

  
  constructor(public userService : UserService, public WineService : WineService) { 



  }


  ngOnInit() {
this.getShowUser()
this.showAdmin()
  }


async showAdmin(){
if (this.user.role=='ADMIN'){
this.currentAdmin=this.user
console.log ("sono io bro")

}


}

  async getShowUser() {
    await this.userService.getShowUser().then(
      (res: any) => {
        if (res) {
          this.contentLoaded = true
          this.user = res

        } else {

      
        }
      })
  }


  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }


}
