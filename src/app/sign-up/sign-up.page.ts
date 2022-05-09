import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {


  SignUpForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.SignUpForm = this.formBuilder.group({

      email: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      pass: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])),
      nome: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      cognome: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      numerotel: new FormControl('', Validators.compose([
        Validators.required,

      ]))
    }, {
      validators: this.password.bind(this)
    });
  }

  ngOnInit() {
  }

  

  getCredentials() {


  }
  pwdIcon = "eye-outline";
  showPwd = false;

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('pass');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  error_messages = {

    'email': [
      { type: 'required', message: 'É richiesta l E-mail.' },
      { type: 'required', message: 'inserire un indirizzo E-mail valido.' }
    ],

    'pass': [
      { type: 'required', message: 'É richiesta la password.' },
      { type: 'minlength', message: 'Inserire una password minima di 8 caratteri.' },
      { type: 'maxlength', message: 'Inserire una password massima di 30 caratteri.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'É richiesta la password.' },
    ],
  }
 
  emailCheck(error): boolean {
    return this.SignUpForm.get('email').hasError(error.type) &&
      (this.SignUpForm.get('email').dirty || this.SignUpForm.get('email').touched)
  }

  pwCheck(error): boolean {
    return this.SignUpForm.get('pass').hasError(error.type) &&
      (this.SignUpForm.get('pass').dirty || this.SignUpForm.get('pass').touched)

  }

  confpwCheck(error): boolean {
    return this.SignUpForm.get('confirmpassword').hasError(error.type) &&
      (this.SignUpForm.get('confirmpassword').dirty || this.SignUpForm.get('confirmpassword').touched)

  }

  comparepwCheck(error): boolean{
return !this.SignUpForm.get('confirmpassword').errors && this.SignUpForm.hasError('passwordNotMatch') &&
(this.SignUpForm.get('confirmpassword').dirty || this.SignUpForm.get('confirmpassword').touched)
  }

}




