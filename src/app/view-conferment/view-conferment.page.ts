import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/DataService';
import {ConfermentService} from '../services/conferment.service'
import { findTheCurrentProcessForAConferment  } from '../utilites/utilities-functions';


@Component({
  selector: 'app-view-conferment',
  templateUrl: './view-conferment.page.html',
  styleUrls: ['./view-conferment.page.scss'],
})
export class ViewConfermentPage implements OnInit {
  conferment: any;
  idConferment = '';

  constructor(private dataService: DataService,
              private confermentService: ConfermentService
  ){
              
               }

  ngOnInit() {
    this.getConferment();

  }

  getConferment(){
    this.idConferment = this.dataService.getIdConfermentToView();
    this.confermentService.getConfermentById(this.idConferment).then((res)=>{
      if(res){
        this.conferment = findTheCurrentProcessForAConferment(res)
        console.log(JSON.stringify(res))
      }

    })
  }

 

}
