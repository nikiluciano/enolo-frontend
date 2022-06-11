import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { AuthService } from '../services/auth.service';
import { get, set } from '../storage/data-storage'
import { Network } from '@capacitor/network';
import { User } from '../utilites/User';
import { MenuController } from '@ionic/angular';
import { DataService } from '../services/DataService';


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

  provaUser: string;
  connection = true;

  constructor(private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private user: User,
    private menu: MenuController,
    private dataService: DataService
  ) { }

  ngOnInit() {

    console.log("ciao")
    let ref = this

    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      if (status.connected == true) {
        this.connection = true;
      } else {
        this.connection = false
      }

    });

    async () => {
      const status = await Network.getStatus();
      console.log('Network status:', status.connected);
    };

    console.log(Network.getStatus())
  }


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
    if (this.validateInputs()) {
      this.isLoading = true;
      await this.authService.login(this.postData).subscribe(
        (res: any) => {
          this.isLoading = false;

          if (res) {
            this.router.navigate(['home']);
            let token = res.token;
            set('token', token).then(() =>
              this.dataService.getUser().setUser(this.postData.username));

          }
        },
        (error: any) => {
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

  setUser() {

  }


  ionViewWillEnter() {
    this.menu.enable(false);
  }




}
