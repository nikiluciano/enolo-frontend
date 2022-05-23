import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {

 load= [];

  constructor(public platform: Platform, public loadingController: LoadingController) {
    this.platform.ready().then(() => {
      this.loadingController.create({
        message: "loading..."
      }).then((loadingElement) => {
        loadingElement.present();

        var ref = this;
        setTimeout(function () {
          ref.loadingController.dismiss();
        }, 2000)
      })
    }
    )


  }




  ngOnInit() { }


}
