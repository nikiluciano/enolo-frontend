import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  name: string;
  surname: string;
  pass: string;
  telephone: string;

  ngOnInit() {
  }
  getCredentials() {
    console.log(this.name);
    console.log(this.surname);
    console.log(this.telephone);


  }
  pwdIcon = "eye-outline";
  showPwd = false;

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
  }


}