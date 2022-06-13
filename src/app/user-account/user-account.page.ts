import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../services/DataService';
import { User } from '../utilites/User';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {

  email: string;
  name: string;
  surname: string;
  address: string;
  username: string;
  phone: string;


  constructor(private menu: MenuController,
    private dataService: DataService,
    private user: User

  ) { }

  ngOnInit() {
    this.dataService.getUserDataStored();
    this.getUser()

  }
  pwdIcon = "eye-outline";
  showPwd = false;

  togglePwd() {
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
  }

  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
    this.getUser()
  }

  getUser() {
    this.email = this.dataService.getUser().email
    this.name = this.dataService.getUser().name
    this.surname = this.dataService.getUser().surname
    this.address = this.dataService.getUser().address
    this.phone = this.dataService.getUser().phone
    this.username = this.dataService.getUser().username
  }
}