import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ConfermentService } from '../services/conferment.service';
@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {

  postData: any;

  constructor(public confermentService: ConfermentService,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.getAllConferment();
  }



  doRefresh(event) {
    setTimeout(() => {
      console.log("prova")
      event.target.complete()
    }, 2000);
     this.getAllConferment();
  }

  getAllConferment() {
    this.confermentService.getAllConferments().then(
      (res: any) => {
        if (res) {
          this.postData = res
        } else {
          console.log("errore");
        }
      }
    )
  }
}