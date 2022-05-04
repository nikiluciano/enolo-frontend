import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email: string;
  password: string;
  loginForm: FormGroup;

  ngOnInit() {
  }
  getCredentials() {
    console.log(this.email);

  }

  pwdIcon = "eye-outline";
  showPwd = false;

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
  }

  error_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'email', message: 'Please enter a valid email address.' }
    ],

    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password length.' },
      { type: 'maxlength', message: 'Password length.' },
      { type: 'password', message: 'Please enter a valid password.' }
    ],
  }

  constructor(public formBuilder: FormBuilder, public toastController: ToastController,) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])),
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Email or password not entered.',
      duration: 2000,

    });
    toast.present();
  }

}
