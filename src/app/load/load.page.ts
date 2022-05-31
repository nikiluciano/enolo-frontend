import { Component, OnInit, ViewChild } from '@angular/core'; 
import { LoadingController } from '@ionic/angular'; 
import { ConfermentService } from '../services/conferment.service'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
 
 
@Component({ 
  selector: 'app-load', 
  templateUrl: './load.page.html', 
  styleUrls: ['./load.page.scss'], 
}) 
export class LoadPage implements OnInit { 
 
  search: string; 
  postData: any; 
  conferment = []; 
 
 
  constructor(public confermentService: ConfermentService, 
    public ng2SearchPipeModule: Ng2SearchPipeModule, 
    private loadingCtrl: LoadingController) { } 
 
 
 
 
  ngOnInit() { 
    this.getAllConferment(); 
    this.loadConferment(); 
  } 
 
 
 
  async loadConferment() { 
 
    const loading = await this.loadingCtrl.create({ 
      message: 'Caricamento...', 
      spinner: 'bubbles', 
    }); 
    await loading.present(); 
 
    this.confermentService.getAllConferments().then((res) => { 
      loading.dismiss(); 
      this.conferment = [...this.conferment, ...res]; 
      console.log(res); 
    }) 
  } 
 
  doRefresh(event) { 
    setTimeout(() => { 
      event.target.complete() 
    }, 3000); 
    this.getAllConferment(); 
    this.loadConferment(); 
  } 
 
 
 
  findTheCurrentProcess() { 
 
    for (let i = 0; i < this.postData.length; i++) { 
      if (this.postData[i].status == "READY") { 
        this.postData[i].current_process = "Pronto" 
      }  
      else if (this.postData[i].status == "DELIVERED") 
        this.postData[i].current_process = "Non iniziato" 
 
      else if (this.postData[i].status == null) 
        this.postData[i].current_process = "Non iniziato" 
 
      else { 
        switch (this.postData[i].current_process) { 
          case "wine_pressing_process": 
            this.postData.current_process = "Pigiatura 1/6" 
 
            break; 
 
          case "destemming_process": 
            this.postData[i].current_process = "Diraspatura 2/6" 
 
            break; 
             
          case "winemaking_process": 
            this.postData[i].current_process = "Vinificazione 3/6" 
 
            break; 
 
          case "racking_process": 
            this.postData[i].current_process = "Svinatura 4/6" 
 
            break; 
 
          case "refinement_process": 
            this.postData[i].current_process = "Affinamento 5/6" 
 
            break; 
          case "bottling_process": 
            this.postData[i].current_process = "Imbottigliamento 6/6" 
 
            break; 
 
        } 
 
 
      } 
    } 
  } 
 
 
 
 
  getAllConferment() { 
    this.confermentService.getAllConferments().then( 
      (res: any) => { 
        if (res) { 
          this.postData = res 
          this.findTheCurrentProcess() 
        } else { 
          console.log("errore"); 
        } 
      } 
    ) 
 
  } 
}

