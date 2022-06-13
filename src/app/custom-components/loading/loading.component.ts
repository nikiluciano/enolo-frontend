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


/**
 * This class is the TS of the loading, 
 * a custom component to be used during the calls made to the server
 */
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


/**
 * make the loading visible
 */
  watchLoading() {
    this.uiService.watchLoading()
      .subscribe(loading => {
      })
  }

}
