import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { AuthService } from '../services/auth.service';
import { get, set } from '../storage/data-storage'
import { LoadingController } from '@ionic/angular';
import { LoadingComponent } from '../custom-components/loading/loading.component';
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

  isLoading = false;

  constructor(private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private loadingCtrl: LoadingController,
    private loading: LoadingComponent
  ) { }

  ngOnInit() { }

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


  async loginAction() {
   /*  const loading = await this.loadingCtrl.create({
      message: 'Caricamento...',
      spinner: 'bubbles'
    });
    await loading.present(); */
    //this.loading.watchLoading()
    if (this.validateInputs()) {
      this.isLoading = true;
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          //loading.dismiss(); 
          this.isLoading = false;
 
          if (res) {
            this.router.navigate(['home']);
            let token = res.token;
            set('token', token);

          }
        },
        (error: any) => {
          //loading.dismiss();  
          this.isLoading = false;
          this.toastService.presentToast('Username o password errati.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Inserire username o password.'
      );
    }
    this.checkEmptyFields();

  }

  checkEmptyFields() {
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
