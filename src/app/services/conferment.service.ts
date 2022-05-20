import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})
export class ConfermentService {

  constructor(private wineService: WineService,
              private router: Router) { }

              getAllConferments(): Observable<any>{
              return this.wineService.get('wineConferment');
              }

              insertConferment(postData: any): Observable<any>{
               return this.wineService.post('wineConferment',postData);
  
              }
              
}
