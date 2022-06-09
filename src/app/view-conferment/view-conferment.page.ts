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



  thereArePendingConferments = false;
  conferments = [];

  conferment: any;
  idConferment = '';

  loading = true;

  constructor(private dataService: DataService,
    private confermentService: ConfermentService,
    private menu: MenuController
  ) {

  }

  ngOnInit() {
    this.getConferment();
  }

  getConferment() {
    this.idConferment = this.dataService.getIdConfermentToView();
    this.loading = true;
    this.confermentService.getConfermentById(this.idConferment).then((res) => {
      if (res) {
        this.loading = false;
        this.conferment = findTheCurrentProcessForAConferment(res)
        console.log("Conferimento caricato correttamente" + JSON.stringify(res))
      }

    })
  }

  async getPendingConferments() {
    await this.confermentService.getPandingConferments().then(
      (res: any) => {
        if (res) {
          this.conferment = res
          this.thereArePendingConferments = true;

        }
        else {
          this.thereArePendingConferments = false;
        }
      }
    )
  }


  async newProcess(currentProcess: string, status: string) {
    console.log("nuovo process in avvio")
    let id = this.conferment._id
    if (status == null || status == "DELIVERED") {
      let patchWinePressing = "winePressingProcess"
      let bodyWinePressing = {
        description: "giusto per provare"

      }
      this.confermentService.patchProcess(patchWinePressing, id, bodyWinePressing)
      this.getConferment();

    } else if (status != "READY") {
      switch (currentProcess) {
        case "Pigiatura":
          let patchDestemming = "destemmingProcess";
          let bodyDestemming = {
            description: "giusto per provare secondo processo patchato"
          }
          await this.confermentService.patchProcess(patchDestemming, id, bodyDestemming)
          this.getConferment();
          break;

        case "Diraspatura":
          let patchWineMaking = "winemakingProcess";
          let bodyWineMaking = {
            description: "giusto per provare terzo processo patchato",
            waste : 150
          }
          await this.confermentService.patchProcess(patchWineMaking, id, bodyWineMaking)
          this.getConferment();
          break;

        case "Vinificazione":
          let patchRacking = "rackingProcess";
          let bodyRacking = {
            description: "giusto per provare quarto processo patchato",
            waste: 150
          }
          await this.confermentService.patchProcess(patchRacking, id, bodyRacking)
          this.getConferment();
          console.log("wine making to racking")

          break;

        case "Svinatura":
          let patchRefinement = "refinementProcess";
          let bodyRefinement = {
            description: "giusto per provare quinto processo patchato"

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


}