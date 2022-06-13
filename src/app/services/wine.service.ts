import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { get, set } from '../storage/data-storage';


@Injectable({
  providedIn: 'root'
})


/**
 * Service where are wrapped in
 * the functions provided by the library HTTP.
 */
export class WineService {

  token = get('token');

  constructor(private http: HttpClient) { }

  options: any;
  deleteOptions: any;


  /**
   * wraps the http.post function
   * Will be used for services that don't require bearer token
   * @param serviceName name of the service to make the call to
   * @param data data the service needs to receive
   * @returns resolve if the request is correct, otherwise the request 
   * will be rejected
   */
  post(serviceName: string, data: any): Promise<any> {
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return new Promise((resolve, reject) => {
      this.http.post(url, data, options).subscribe({
        next: data => {
          resolve(data)
        },
        error: err => {
          reject(err.error)
        }
      })
    })
  }


  /**
   *wraps the http.post function
   * @param serviceName name of the service: ex '/login'
   * @param postData post data to be passed to the server: 
   * ex postData{
   * name: your_name
   * password: your_password
   * }
   * @param options 
   * 
   * @returns resolve if the request is correct, otherwise request will be rejected
  
   */
  postObjects(serviceName: string, postData: any, options): Promise<any> {
    let url = environment.apiUrl + serviceName;
    return new Promise((resolve, reject) => {
      this.http.post(url, postData, options).subscribe({
        next: data => {
          resolve(data)
        },
        error: err => {
          reject(err.error)
        }
      }
      )
    })

  }


  /**
   * Wraps together the function that retrieves the user token inside the device
   * and the postObject function
   */
  async postWithToken(serviceName: string, postData: any): Promise<any> {
    await this.getBearerToken();
    return this.postObjects(serviceName, postData, this.options)

  }


  /**
   *Wraps together the function that retrieves the user token inside the device
   * and the getObjects function
   * @param serviceName ex: /warehouse
   * @returns result of getObjects function
   */
  async get(serviceName: string): Promise<any> {
    await this.getBearerToken();
    return this.getObjects(serviceName, this.options)

  }


  /**
   * @returns the token found in the user's device
   */
  getBearerToken() {
    return get('token').then(res => {
      const headers = new HttpHeaders({
        'Authorization': res
      });
      this.options = { headers: headers, withCredentials: false };
    })

  }


  /**
   * @param serviceName ex: /warehouse
   * @param options ex: headers = new HttpHeaders({
        'Authorization': res
      });
      this.options = { headers: headers, withCredentials: false };
   * @returns resolve if the request is correct, otherwise request will be rejected
   */
  getObjects(serviceName: string, options): Promise<any> {
    let url = environment.apiUrl + serviceName;
    return new Promise((resolve, reject) => {
      this.http.get(url, options).subscribe({
        next: data => {
          resolve(data)
        },
        error: err => {
          reject(err.error)
        }
      })
    })
  }


  /**
   * wraps the http.post function
   * @param serviceName ex: '/wine_conferment/wine_pressing_process/:id'
   * @param patchData ex:{
      "description": "description"
  }
   * @param options ex: headers = new HttpHeaders({
        'Authorization': res
      });
      this.options = { headers: headers, withCredentials: false };
   * @returns resolve if the request is correct, otherwise request will be rejected
   */
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



  /**
  *Wraps together the function that retrieves the user token inside the device
  * and the patchObjects function
  * @param serviceName ex: /warehouse
  * @returns result of patchObjects function
  */

  async patchWithToken(serviceName: string, patchData: any): Promise<any> {
    await this.getBearerToken();
    return this.patchObjects(serviceName, patchData, this.options)
  }


  /**
   * 
   * @param deleteData ex: {
   * {
   *  "id":id
   * }
   * @return result of get of the token from the user's device
   */
  async getTokenForDelete(deleteData: any) {
    return get('token').then(res => {
      const headers = new HttpHeaders({
        'Authorization': res
      });
      this.deleteOptions = { headers: headers, withCredentials: false, body: deleteData };
    })

  }


  /**
   * wraps the http.delete function
   * @param serviceName ex: 'wine_conferment/:username'
   * @param deleteData ex: {
   * "id":id
   * }
   * @returns resolve if the request is correct, otherwise request will be rejected
   */
  async deleteObjects(serviceName: string, deleteData: any): Promise<any> {
    let url = environment.apiUrl + serviceName;
    this.getTokenForDelete(deleteData);
    return new Promise((resolve, reject) => {
      this.http.delete(url, this.deleteOptions).subscribe({
        next: data => {
          resolve(data)
        },
        error: err => {
          reject(err.error)
        }
      })
    })
  }


}