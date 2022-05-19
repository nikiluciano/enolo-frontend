import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  postData = {
    username: '',
    email: '',
    confirmPassword: '',
    pass: '',
    name: '',
    surname: '',
    address: '',
    telephoneNumber: ''
  };

  SignUpForm: FormGroup;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.SignUpForm = this.formBuilder.group({

      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      pass: new FormControl('', Validators.compose([
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
      telephoneNumber: new FormControl('', Validators.compose([
        Validators.required,

      ]))
    }, {
      validators: this.pass.bind(this)
    });
  }

  ngOnInit() { }

  pwdIcon = "eye-outline";
  showPwd = false;

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
  }


  validateInputs() {
    console.log(this.postData);
    let username = this.postData.username.trim();
    let pass = this.postData.pass.trim();
    let email = this.postData.email.trim();
    return (
      this.postData.username &&
      this.postData.pass &&
      this.postData.email &&
      username.length > 0 &&
      email.length > 0 &&
      pass.length > 0
    );
  }

  signAction() {
    if (this.validateInputs()) {
      this.authService.signup(this.postData).subscribe(
        (res: any) => {
          if (res) {
            this.router.navigate(['home']);
          } else {
            this.toastService.presentToast(
              'Data alreay exists, please enter new details.'
            );
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Please enter email, username or password.'
      );
    }
  }


  pass(formGroup: FormGroup) {
    const { value: pass } = formGroup.get('pass');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return pass === confirmPassword ? null : { passwordNotMatch: true };
  }

  emailCheck(error): boolean {
    return this.SignUpForm.get('email') &&
      (this.SignUpForm.get('email').dirty || this.SignUpForm.get('email').touched)
  }

  pwCheck(error): boolean {
    return this.SignUpForm.get('pass') &&
      (this.SignUpForm.get('pass').dirty || this.SignUpForm.get('pass').touched)

  }

  confpwCheck(error): boolean {
    return this.SignUpForm.get('confirmPassword') &&
      (this.SignUpForm.get('confirmPassword').dirty || this.SignUpForm.get('confirmPassword').touched)

  }

  comparepwCheck(error): boolean {
    return !this.SignUpForm.get('confirmPassword').errors && this.SignUpForm.hasError('passwordNotMatch') &&
      (this.SignUpForm.get('confirmPassword').dirty || this.SignUpForm.get('confirmPassword').touched)
  }

 



}




