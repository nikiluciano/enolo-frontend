import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.page.html',
  styleUrls: ['./forgot-pw.page.scss'],
})
export class ForgotPwPage implements OnInit {
  email: string;

  constructor() { }

  ngOnInit() {
  }
  getCredentials() {
    console.log(this.email);
  }


}