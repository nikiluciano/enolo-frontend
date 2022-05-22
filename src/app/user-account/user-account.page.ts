import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {


  
  postData = {
    email: 'nome a caso',
    nome: 'Nome_user',
    cognome:'Cognome_user',
    username:'prova',
    telefono:'123 4567890',
    indirizzo:'prova',
    password:'prova'
  }


  constructor() { }

  ngOnInit() {
  }
  pwdIcon = "eye-outline"; 
  showPwd = false; 
 
  togglePwd() { 
    this.showPwd = !this.showPwd; 
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline"; 
  }  

}
