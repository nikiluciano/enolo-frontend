import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';




@Component({
  selector: 'app-patch-account',
  templateUrl: './patch-account.page.html',
  styleUrls: ['./patch-account.page.scss'],
})
export class PatchAccountPage implements OnInit {

  postData = {
    email: 'prova@gmail.com',
    nome: 'Nome_user',
    cognome:'Cognome_user',
    username:'prova',
    telefono:'123 4567890',
    indirizzo:'prova',
    password:'prova'
  }
  


  constructor(private menu: MenuController){
   
  }

  ngOnInit() {
  }

  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

 
}
