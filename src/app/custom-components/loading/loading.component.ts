import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';
import { UiService } from 'src/app/services/ui/ui.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})



@Injectable({
  providedIn: 'root',
})


export class LoadingComponent implements OnInit {

  loading = false;

  constructor(private uiService: UiService,
    private platform: Platform) {
    this.ngOnInit()
  }

  ngOnInit() {
    this.platform.ready()
      .then(_ => {
        this.watchLoading()

      })
  }



  watchLoading() {
    this.uiService.watchLoading()
      .subscribe(loading => {
      })
  }

}
