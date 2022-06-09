import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { get, set } from '../storage/data-storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  token = get('token');

  constructor(private http: HttpClient) { }
  
  options: any;


  //Function for POST calls

  //function for post where BearerToken is not needed
  //this one uses the environment URL, that's pointing to an HEROKU place
  post(serviceName: string, data: any) {
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return this.http.post(url, data, options);
  }

  //this function won't use server's URL of the app, just for other services
  getFromOtherServers(apiUrl: string, serviceName: string){
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false };
    const completeUrl = apiUrl + serviceName;

    return this.http.get(completeUrl);

  }


  //post that will be concatenated to the function that retrieves Bearer token
  postObjects(serviceName: string, postData: any,  options) {
    let url = environment.apiUrl + serviceName;
    return this.http.post(url, postData, options)

  }


  async postWithToken(serviceName: string, postData: any) {
    await this.getBearerToken();
    return this.postObjects(serviceName, postData, this.options).toPromise()

  }




  //Function for GET calls

  //concatenate the token function with the get call function
  async get(serviceName: string) {
    await this.getBearerToken();
    return this.getObjects(serviceName, this.options).toPromise()

  }

  //obtains the token of the current user
  getBearerToken() {
    return get('token').then(res => {
      const headers = new HttpHeaders({
        'Authorization': res
      });
      this.options = { headers: headers, withCredintials: false };
    })

  }

  //make a get call to the server
  getObjects(serviceName: string, options) {
    let url = environment.apiUrl + serviceName;
    return this.http.get(url, options)
  }

  
   //functions to make patch corse
   patchObjects(serviceName: string, patchData: any,  options) {
    let url = environment.apiUrl + serviceName;
    return this.http.patch(url, patchData, options)

  } 

  async patchWithToken(serviceName: string, patchData: any) {
    await this.getBearerToken();
    return this.patchObjects(serviceName, patchData, this.options).toPromise()

  }

    
}