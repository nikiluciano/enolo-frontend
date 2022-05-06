import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  loginForm: FormGroup;

  postData = {
    email: '',
    password: ''
  }


  constructor(public formBuilder: FormBuilder, private toastService: ToastService) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])),
    });
  }


  ngOnInit() {
    if (this.loginAction) {


    } else {


    }
  }

  loginAction(): boolean {
    let username = this.postData.email.trim();
    let password = this.postData.password.trim();
    return (
      this.postData.email &&
      this.postData.password &&
      username.length > 0 &&
      password.length > 0
    );


  }

  inputValids(): boolean {

    return true;
  }


  pwdIcon = "eye-outline";
  showPwd = false;

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
  }
  error_messages = {

    'email': [
      { type: 'required', message: 'É richiesta la e-mail.' },
      { type: 'email', message: 'Inserire un indirizzo e-mail valido.' }
    ],

    'password': [
      { type: 'required', message: 'É richiesta la password.' },
      { type: 'minlength', message: 'Password minima di 8 caratteri.' },
      { type: 'maxlength', message: 'Password massima di 30 caratteri.' },
      { type: 'password', message: 'Inserire una password valida.' }
    ],
  }



  emailCheck(error): boolean {
    return this.loginForm.get('email').hasError(error.type) &&
      (this.loginForm.get('email').dirty ||
        this.loginForm.get('email').touched)

  }

  passwordCheck(error): boolean {

    return this.loginForm.get('password').hasError(error.type) &&
      (this.loginForm.get('password').dirty ||
        this.loginForm.get('password').touched)
  }

}
