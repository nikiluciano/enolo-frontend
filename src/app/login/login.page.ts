import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  postData = {
    username: '',
    password: ''
  }
  missingPassword = false;
  missingUsername = false;


  constructor( private authService: AuthService,
              private router: Router,
               private toastService: ToastService)

               {}


  ngOnInit() {}

  pwdIcon = "eye-outline";
  showPwd = false;

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
  }

  validateInputs(): boolean {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    return (
      this.postData.username &&
      this.postData.password &&
      username.length > 0 &&
      password.length > 0
    );

 }

 

 loginAction() {
  if (this.validateInputs()) {
  this.authService.login(this.postData).subscribe(
  (res: any) => {
  if (res) {
  this.router.navigate(['home']);
  } else {
  this.toastService.presentToast('Username o password errati.');
  }
  },
  (error: any) => {
  this.toastService.presentToast('Network Issue.');
  }
  );
  } else {
  this.toastService.presentToast(
  'Inserire username o password.'
  );
  }
  console.log(this.postData.username);
    if (this.postData.username.length <= 0)
      this.missingUsername = true;
    else
      this.missingUsername = false;

    if (this.postData.password.length <= 0)
      this.missingPassword = true;
    else
      this.missingPassword = false;

  }

 
    
}
