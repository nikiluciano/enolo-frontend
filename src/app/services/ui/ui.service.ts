import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Service used to display loading custom component
 */
export class UiService {

  loading = new BehaviorSubject(false)

  constructor() { }

  showLoading(){
    this.loading.next(true)
  }

  dismissLoading(){
    this.loading.next(false)

  }

  watchLoading(){
    return this.loading.asObservable()
  }

  }



