import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  postData = {
    username: '',
    email: '',
    password: '',
    name: '',
    surname: '',
    address: '',
    phone: ''
  };

  missingPassword = false;
  missingUsername = false;
  missingName = false;
  missingSurname = false;
  missingAddress = false;
  missingEmail = false;
  missingPhone = false;
  missingConfirmPassword = false;



  SignUpForm: FormGroup;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    public formBuilder: FormBuilder,
    private menu: MenuController
  ) {
    this.SignUpForm = this.formBuilder.group({

      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      surname: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      username: new FormControl('', ([

      ])),
      address: new FormControl('', ([


      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,

      ]))
    }, {
      validators: this.pass.bind(this)
    });
  }

  ngOnInit() {
  }



  pwdIcon = "eye-outline";
  showPwd = false;

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
  }


  validateInputs() {
    console.log(this.postData);
    let username = this.postData.username.trim();
    let pass = this.postData.password.trim();
    let email = this.postData.email.trim();
    return (
      this.postData.username &&
      this.postData.password &&
      this.postData.email &&
      username.length > 0 &&
      email.length > 0 &&
      pass.length > 0

    );
  }

  signAction() {
    if (this.validateInputs()) {
      this.authService.signup(this.postData)
        .then( res=>{
          this.router.navigate(['login']);
          this.toastService.presentToast("Utente registrato correttamente");
        } 
      )
        .catch( err =>{
          this.toastService.presentToast(err.msg);
        }
      )
    } else {
      this.toastService.presentToast(
        'Riempire tutti i campi correttamente.'
      );
    }

    if (this.postData.username.length <= 0)
      this.missingUsername = true;
    else
      this.missingUsername = false;

    if (this.postData.password.length <= 0)
      this.missingPassword = true;
    else
      this.missingPassword = false;

    if (this.postData.name.length <= 0)
      this.missingName = true;
    else
      this.missingName = false;

    if (this.postData.surname.length <= 0)
      this.missingSurname = true;
    else
      this.missingSurname = false;

    if (this.postData.address.length <= 0)
      this.missingAddress = true;
    else
      this.missingAddress = false;

    if (this.postData.phone.length <= 0)
      this.missingPhone = true;
    else
      this.missingPhone = false;

    if (this.postData.email.length <= 0)
      this.missingEmail = true;
    else
      this.missingEmail = false;
  }


  pass(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  emailCheck(error): boolean {
    return this.SignUpForm.get('email') &&
      (this.SignUpForm.get('email').dirty || this.SignUpForm.get('email').touched)
  }

  pwCheck(error): boolean {
    return this.SignUpForm.get('password') &&
      (this.SignUpForm.get('password').dirty || this.SignUpForm.get('password').touched)

  }

  confpwCheck(error): boolean {
    return this.SignUpForm.get('confirmPassword') &&
      (this.SignUpForm.get('confirmPassword').dirty || this.SignUpForm.get('confirmPassword').touched)

  }

  comparepwCheck(error): boolean {
    return !this.SignUpForm.get('confirmPassword').errors && this.SignUpForm.hasError('passwordNotMatch') &&
      (this.SignUpForm.get('confirmPassword').dirty || this.SignUpForm.get('confirmPassword').touched)
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }


}




