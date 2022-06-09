import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.page.html',
  styleUrls: ['./show-user.page.scss'],
})
export class ShowUserPage implements OnInit {

   admin = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];

worker = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
];

  
  constructor(private menu: MenuController) { }

  ngOnInit() {
  }


  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }


}
