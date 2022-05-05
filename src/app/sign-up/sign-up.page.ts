import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({ 
  selector: 'app-sign-up',  
  templateUrl: './sign-up.page.html', 
  styleUrls: ['./sign-up.page.scss'], 
}) 
export class SignUpPage implements OnInit { 
  

  SignUpForm: FormGroup;
   
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
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'required', message: 'please enter a valid email address.' }
    ],

    'pass': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
    ],
  }
  constructor(
    public formBuilder: FormBuilder
  ) {
    this.SignUpForm = this.formBuilder.group({
    
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      pass: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
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

}

 


 