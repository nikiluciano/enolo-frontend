import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/DataService';
import { ConfermentService } from '../services/conferment.service'
import { findTheCurrentProcessForAConferment } from '../utilites/utilities-functions';
import { MenuController } from '@ionic/angular';


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

  constructor(private dataService: DataService,
    private confermentService: ConfermentService,
    private menu: MenuController
  ) {

  }

  ngOnInit() {
    this.getConferment();
    console.log("CIAO INIT")

  }

  getConferment() {
    this.idConferment = this.dataService.getIdConfermentToView();
    this.loading = true;
    this.confermentService.getConfermentById(this.idConferment).then((res) => {
      if (res) {
        this.loading = false;
        this.conferment = findTheCurrentProcessForAConferment(res)
        this.getNextProcess(this.conferment.current_process);
        console.log(JSON.stringify(this.conferment))
        console.log("CIAO")
      }

    })
  }





  async newProcess(currentProcess: string, status: string) {
    console.log("nuovo process in avvio")
    let id = this.conferment._id
    if (status == null || status == "DELIVERED") {
      let patchWinePressing = "winePressingProcess"
      let bodyWinePressing = {
        description: this.description

      }
      this.confermentService.patchProcess(patchWinePressing, id, bodyWinePressing)
      this.getConferment();

    } else if (status != "READY") {
      switch (currentProcess) {
        case "Pigiatura":
          let patchDestemming = "destemmingProcess";
          let bodyDestemming = {
            description: this.description
          }
          await this.confermentService.patchProcess(patchDestemming, id, bodyDestemming)
          this.getConferment();
          break;

        case "Diraspatura":
          let patchWineMaking = "winemakingProcess";
          let bodyWineMaking = {
            description: this.description,
            waste : this.waste
          }
          await this.confermentService.patchProcess(patchWineMaking, id, bodyWineMaking)
          this.getConferment();
          break;

        case "Vinificazione":
          let patchRacking = "rackingProcess";
          let bodyRacking = {
            description: this.description,
            waste: this.waste
          }
          await this.confermentService.patchProcess(patchRacking, id, bodyRacking)
          this.getConferment();
          console.log("wine making to racking")

          break;

        case "Svinatura":
          let patchRefinement = "refinementProcess";
          let bodyRefinement = {
            description: this.description,

          }
          await this.confermentService.patchProcess(patchRefinement, id, bodyRefinement)
          this.getConferment();
          break;

        case "Affinamento":
          let patchBottling = "bottlingProcess sesto processo patchato";
          let bodyPatchBottling = {

          }
          await this.confermentService.patchProcess(patchRefinement, id, bodyPatchBottling)
          this.getConferment();
          break;

        case "bottling_process":

          break;
      }
    }
  }

  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  getNextProcess(currentProcess: string){
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
  


}