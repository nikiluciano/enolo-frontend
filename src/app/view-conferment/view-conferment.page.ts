import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/DataService';
import { ConfermentService } from '../services/conferment.service'
import { findTheCurrentProcessForAConferment } from '../utilites/utilities-functions';
import { MenuController } from '@ionic/angular';
import { bottlingDataPatch } from '../utilites/utilities-functions';

@Component({
  selector: 'app-view-conferment',
  templateUrl: './view-conferment.page.html',
  styleUrls: ['./view-conferment.page.scss'],
})


export class ViewConfermentPage implements OnInit {

  conferment: any;
  idConferment = '';
  nextProcess: string;

  loading = true;

  description: string;
  waste: number;

  bottles_quantity: number;
  format: string;
  caps_quantity: number;
  tags_quantity: number


  constructor(private dataService: DataService,
    private confermentService: ConfermentService,
    private menu: MenuController
  ) {

  }

  ngOnInit() {
    this.getConferment();
    console.log("CIAO INIT")
    this.initiazileModels();
  }

  getConferment() {
    this.initializeVariables()
    this.idConferment = this.dataService.getIdConfermentToView();
    this.loading = true;
    this.confermentService.getConfermentById(this.idConferment).then((res) => {
      if (res) {
        this.loading = false;
     
        this.conferment = findTheCurrentProcessForAConferment(res)
        console.log(JSON.stringify(this.conferment))
        this.getNextProcess(this.conferment.current_process);
        this.initiazileModels();
      }
    })
  }



  async newProcess(currentProcess: string, status: string) {
    console.log("nuovo process in avvio")
    let id = this.conferment._id
    if (status == null || status == "DELIVERED") {
      let patchWinePressing = "wine_pressing_process"
      let bodyWinePressing = {
        description: this.description

      }
      await this.confermentService.patchProcess(patchWinePressing, id, bodyWinePressing)
      this.getConferment();

    } else if (status != "READY") {
      switch (currentProcess) {
        case "Pigiatura":
          let patchDestemming = "destemming_process";
          let bodyDestemming = {
            description: this.description,
            waste: this.waste
          }
          await this.confermentService.patchProcess(patchDestemming, id, bodyDestemming)
          this.getConferment();
          break;

        case "Diraspatura":
          let patchWineMaking = "wine_making_process";
          let bodyWineMaking = {
            description: this.description,
            waste: this.waste
          }
          await this.confermentService.patchProcess(patchWineMaking, id, bodyWineMaking)
          this.getConferment();
          break;

        case "Vinificazione":
          let patchRacking = "racking_process";
          let bodyRacking = {
            description: this.description,
          }
          await this.confermentService.patchProcess(patchRacking, id, bodyRacking)
          this.getConferment();
          console.log("wine making to racking")

          break;

        case "Svinatura":
          let patchRefinement = "refinement_process";
          let bodyRefinement = {
            description: this.description,

          }
          await this.confermentService.patchProcess(patchRefinement, id, bodyRefinement)
          this.getConferment();
          break;

        case "Affinamento":
          let patchBottling = "bottling_process"
          let bodyBottling = {
            bottles: {
              bottles_quantity: this.bottles_quantity,
              format: this.format
            },
            caps_quantity: this.caps_quantity,
            tags_quantity: this.tags_quantity

          }
          console.log(JSON.stringify(bodyBottling))
          await this.confermentService.patchProcess(patchBottling, id, bodyBottling)
            .catch(error => {

            })
          this.getConferment();
          break;

        case "Imbottigliamento":

          break;
      }
    }
  }


  openMenu() {
    this.menu.open();
  }


  ionViewWillEnter() {
    this.menu.enable(true);
    this.getConferment()
  }


  getNextProcess(currentProcess: string) {
    switch (currentProcess) {
      case "Pigiatura":
        this.nextProcess = "Diraspatura";
        break;

      case "Diraspatura":
        this.nextProcess = "Vinificazione";
        break;

      case "Vinificazione":
        this.nextProcess = "Svinatura";
        break;

      case "Svinatura":
        this.nextProcess = "Affinamento";
        break;

      case "Affinamento":
        this.nextProcess = "Imbottigliamento";
        break;

      case "Imbottigliamento":

        break;
    }
  }


  initiazileModels() {
    //this.bottlingData = "";
    this.bottles_quantity = null;
    this.caps_quantity = null;
    this.tags_quantity = null;
    this.format = null
    this.description = null;
    this.waste = null;
  }

  initializeVariables(){

    this.conferment = null;
    this.idConferment = null;
    this.nextProcess= null;
  
    this.loading = false;
  
    this.description= null;
    this.waste= null;
  
    this.bottles_quantity= null;
    this.format= null;
    this.caps_quantity= null;
    this.tags_quantity= null;

  }
}