import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Service to make call to the collection of conferments of the DB.
 */
export class ConfermentService {
  WINE_CONFERMENT = 'wine_conferment';
  WINE_CONFERMENTS = 'wine_conferments';

  constructor(private wineService: WineService,
    private router: Router) { }

  getAllConferments(): Promise<any> {
    return this.wineService.get(this.WINE_CONFERMENT);
  }

  insertConferment(postData: any) {
    return this.wineService.postWithToken(this.WINE_CONFERMENT, postData);

  }
  getPandingConferments(): Promise<any> {
    return this.wineService.get(this.WINE_CONFERMENT);
  }

  getConfermentById(id: string) {
    return this.wineService.get(this.WINE_CONFERMENT + '/' + id)

  }

  getFilteredConferments(query: string) {
    return this.wineService.get(this.WINE_CONFERMENTS + "/filters?" + query)

  }

  patchProcess(process: string, id: string, data: any) {
    return this.wineService.patchWithToken(this.WINE_CONFERMENT + "/" + process + "/" + id, data)

  }

  deleteConferment(username: string, deleteData) {
    return this.wineService.deleteObjects(this.WINE_CONFERMENT + "/" + username, deleteData)
  }
}
