import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {
  public list: Array<Object> = [];
  public searchedItem: any;

  constructor() { 
  

  }
  

  

  ngOnInit() {
    
  }

}
