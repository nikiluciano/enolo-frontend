import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MenuController } from '@ionic/angular';
import { DataService } from '../services/DataService';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { set } from '../storage/data-storage'
import { ToastService } from '../services/toast.service';






@Component({
  selector: 'app-patch-account',
  templateUrl: './patch-account.page.html',
  styleUrls: ['./patch-account.page.scss'],
})
export class PatchAccountPage implements OnInit {

  patchData = {
    email: '',
    name: '',
    surname:'',
    phone:'',
    address:'',

  }

  user:any;
  _id:string;
  username:string;
  email:string;
  name:string;
  surname:string;
  phone:string;
  address:string;

  missingName = false;
  missingSurname = false;
  missingAddress = false;
  missingEmail = false;
  missingPhone = false;


  constructor( private toastService: ToastService,
    private authService: AuthService,
    private router: Router,
    private menu: MenuController,
    private userService : UserService,
    private dataService : DataService
    ){


  }



  ngOnInit() {
  this.checkUser()
  }


  async checkUser(){
    await this.dataService.getUser().checkSession().then((result)=>{
      if(result){

        this.email = this.dataService.getUser().email
        this.username = this.dataService.getUser().username
        this.name = this.dataService.getUser().name
        this.surname = this.dataService.getUser().surname
        this.phone = this.dataService.getUser().phone
        this.address = this.dataService.getUser().address
      }
    }
   )
  }


 openMenu() {
    this.menu.open();
  }

 validateInputs() {
    console.log(this.patchData);
    let email = this.patchData.email.trim();
    let surname = this.patchData.surname.trim();
    let name = this.patchData.name.trim();
    let address = this.patchData.address.trim();


    return (


      this.patchData.email &&
      this.patchData.name &&
      this.patchData.surname &&
      this.patchData.address &&
      this.patchData.phone &&
      email.length > 0 &&
      surname.length > 0 &&
      name.length > 0 &&
      address.length> 0


    );
  }



  async addUser() {

   if (this.validateInputs()) {

      this.userService.addUser(this.patchData,this.username).then(
        (res) => {
          if (res) {
            this.router.navigate(['user-account'])
            this.toastService.presentToast(
              'Account modificato con successo.'
            );
          }
        }
      ).catch((err) => {
        this.toastService.presentToast(
          'Errore.'
        );
      })


    }
    else {
      this.toastService.presentToast(
        'Riempire tutti i campi correttamente.'
      );
    }


    if (this.patchData.name.length <= 0)
      this.missingName = true;
    else
      this.missingName = false;

    if (this.patchData.surname.length <= 0)
      this.missingSurname = true;
    else
      this.missingSurname = false;

    if (this.patchData.address.length <= 0)
      this.missingAddress = true;
    else
      this.missingAddress = false;

    if (this.patchData.phone.length <= 0)
      this.missingPhone = true;
    else
      this.missingPhone = false;

    if (this.patchData.email.length <= 0)
      this.missingEmail = true;
    else
      this.missingEmail = false;

  }



  ionViewWillEnter() {
    this.menu.enable(true);
  }

}