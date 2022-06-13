import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import { UserService } from '../services/user.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})


export class SettingsPage implements OnInit {

  user: any;
  currentAdmin = false;
  contentLoaded = false;
  pages = []

  constructor(public userService: UserService,
    public WineService: WineService,
    private menu: MenuController,
    private router: Router) { }


  ngOnInit() {
    this.initializePages()
  }

  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  initializePages() {
    this.pages = [
      { title: 'Gestione lavoratori', icon: 'accessibility-outline', route: 'show-user' },
      { title: 'Info', icon: 'information-outline', route: 'info' },
      { title: "Guida all'uso", icon: 'book-outline', route: 'home' },
    ]

  }

  goAhead(route: string){
    this.router.navigate([route])

  }

}
