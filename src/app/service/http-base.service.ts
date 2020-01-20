import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  public BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = environment.base_url;
  }
  
  get(url: string) {
    return this.http.get(this.BASE_URL + url,this.getHeaders());
  }
  post(url: string, data: any) {
    return this.http.post(this.BASE_URL + url, data);
  }
  postJson(url: string, data: any) {
    const headers = new Headers();
    return this.http.post(this.BASE_URL + url, data,this.getHeaders());
  }
  put(url: string, data: any) {
    return this.http.put(this.BASE_URL + url, data,this.getHeaders());
  }

  delete(url: string, data?: any) {

    return this.http.delete(this.BASE_URL + url,this.getHeaders());
  }
  getHeaders() {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return { headers };
  }
}
