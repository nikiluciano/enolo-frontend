import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {


  
  postData = {
    email: 'prova@prova.it',
    nome: 'Simone',
    cognome:'Cassetta',
    username:'Simone',
    telefono:'123 4567890',
    indirizzo:'Via Genova',
    password:'prova123'
  }


  constructor(private menu: MenuController) { }

  ngOnInit() {
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


 
}
