import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { User } from '../utilites/User';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(private user: User,
    private router: Router,
    private menu: MenuController) { }

  ngOnInit() {
    setTimeout(() => {
      this.checkSession()

    }, 3000)

  }


  async checkSession() {
    const sessionExists = await this.user.checkSession()
    if (sessionExists){
      const username=await this.user.getSavedUsername()
      this.user.setUser(username)
      this.router.navigate(['/home'])
    }
    else
      this.router.navigate(['/login'])

  }

  
  ionViewWillEnter() {
    this.menu.enable(false);
  }

}
