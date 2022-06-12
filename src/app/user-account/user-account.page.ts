import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../services/DataService';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {
 

   user:any;
  _id:string;
  username:string;
  email:string;
  name:string;
  surname:string;
  phone:string;
  address:string;
  
  


  constructor(private menu: MenuController,
    private dataService: DataService,
   
    ) { }

  ngOnInit() {
    this.dataService.getUserDataStored();
  }
  pwdIcon = "eye-outline"; 
  showPwd = false; 
 
  togglePwd() { 
    this.showPwd = !this.showPwd; 
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline"; 
  }  

   openMenu() {
    this.menu.open();
  }

   ionViewWillEnter() {
    this.menu.enable(true);
  }

  async checkUser(){
    await this.dataService.getUser().checkSession().then((result)=>{
      if(result){
      
        this.email = this.dataService.getUser().getEmail()
        this.username = this.dataService.getUser().getUsername()
        
      }


    }
   )
  }

 
}
