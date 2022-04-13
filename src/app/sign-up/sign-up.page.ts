import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  nome: string;
  cognome: string;
  pass: string;
  numerotel: string;

  ngOnInit() {
  }
  getCredentials() {
    console.log(this.nome);
    console.log(this.cognome);
    console.log(this.numerotel);


  }
  pwdIcon = "eye-outline";
  showPwd = false;

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
  }


}