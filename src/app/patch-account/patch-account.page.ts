import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

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

  postData = {
    email: 'prova@gmail.com',
    nome: 'Simone',
    cognome:'Cassetta',
    username:'Simtape',
    telefono:'123 4567890',
    indirizzo:'Via Genova',
  
  }
  
  
  constructor( private toastService: ToastService,
    private authService: AuthService,
    private router: Router,
    private menu: MenuController
    ){

   
  }

  ngOnInit() {
  }

  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

}