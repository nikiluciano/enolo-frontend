import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { get, set } from '../storage/data-storage';


@Injectable({
  providedIn: 'root'
})
export class WineService {

  token = get('token');

  constructor(private http: HttpClient) { }

  options: any;
  deleteOptions: any;


  //Function for POST calls

  //function for post where BearerToken is not needed
  post(serviceName: string, data: any): Promise<any> {
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return new Promise((resolve, reject)=>{
      this.http.post(url, data, options).subscribe({
        next: data=>{
          resolve(data)
        },
        error: err=>{
          reject(err.error)
        }
      })
    })
  }

  //this function won't use server's URL of the app, just for other services
  getFromOtherServers(apiUrl: string, serviceName: string) {
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false };
    const completeUrl = apiUrl + serviceName;

    return this.http.get(completeUrl);

  }


  //post that will be concatenated to the function that retrieves Bearer token
  postObjects(serviceName: string, postData: any, options): Promise<any> {
    let url = environment.apiUrl + serviceName;
    return new Promise((resolve, reject)=>{
      this.http.post(url, postData, options).subscribe({
          next: data=>{
            resolve(data)
          },
          error: err=>{
            reject(err.error)
          } 
        }
      )
    })

  }


  async postWithToken(serviceName: string, postData: any): Promise<any> {
    await this.getBearerToken();
    return this.postObjects(serviceName, postData, this.options)

  }


  //Function for GET calls

  //concatenate the token function with the get call function
  async get(serviceName: string): Promise<any> {
    await this.getBearerToken();
    return this.getObjects(serviceName, this.options)

  }

  getBearerToken() {
    return get('token').then(res => {
      const headers = new HttpHeaders({
        'Authorization': res
      });
      this.options = { headers: headers, withCredentials: false };
    })

  }

  getObjects(serviceName: string, options): Promise<any> {
    let url = environment.apiUrl + serviceName;
    return new Promise((resolve, reject)=>{
      this.http.get(url, options).subscribe({
        next: data =>{
          resolve(data)
        },
        error: err=> {
          reject(err.error)
        }
      })
    })
  }


  //functions to make patch corse
  patchObjects(serviceName: string, patchData: any, options): Promise<any> {
    let url = environment.apiUrl + serviceName;
    return new Promise((resolve, reject) => {
      this.http.patch(url, patchData, options).subscribe({
        next: data => {
          resolve(data)
        },
        error: err => {
          reject(err.error)
        }
      })
    })

  }

  async patchWithToken(serviceName: string, patchData: any): Promise<any> {
    await this.getBearerToken();
    return this.patchObjects(serviceName, patchData, this.options)
  }


//delete calls





  async deleteWithNoToken(serviceName: string, deleteData:any){
    let url = environment.apiUrl + serviceName;
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false, body: deleteData };
    return new Promise((resolve, reject)=>{
      this.http.delete(url, options).subscribe({
        next: data =>{
          resolve(data)
        },
        error: err =>{
          reject(err.error)
        }
      })
    })

  }

  async getTokenForDelete(deleteData: any){
    return get('token').then(res => {
      const headers = new HttpHeaders({
        'Authorization': res
      });
      this.deleteOptions = { headers: headers, withCredentials: false, body: deleteData};
    })
    
  }

  async deleteObjects(serviceName: string, deleteData:any): Promise<any>{
    let url = environment.apiUrl + serviceName;
    this.getTokenForDelete(deleteData);
    return new Promise((resolve, reject)=>{
      this.http.delete(url, this.deleteOptions).subscribe({
        next: data =>{
          resolve(data)
        },
        error: err =>{
          reject(err.error)
        }
      })
    })
  }


}