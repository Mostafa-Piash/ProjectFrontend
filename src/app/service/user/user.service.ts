import { Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base.service';
import { tap, map, catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpBaseService) { }
  private extractData(res: Response) {
    let data: any;
    data = res;
    return data || {};
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    try {
      if (error instanceof Response) {
        if (error.status === 406) {

        }
        const body = error.json() || '';
        const err = JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      }
      else {
        errMsg = error.message ? error.message : error.toString();
      }
    }
    catch (e) {

    }

    return observableThrowError(errMsg);
  }
  getAll() {
    let url = "/api/user";
    return this.httpService.get(url).pipe(map(this.extractData), catchError(this.handleError));
  }
  get(id) {
    let url = "/api/user/"+id;
    return this.httpService.get(url).pipe(map(this.extractData), catchError(this.handleError));
  }
  post(data){
    let url = "/api/user";
    return this.httpService.post(url,data).pipe(map(this.extractData),catchError(this.handleError));
  }
  put(data){
    let url = "/api/user";
    return this.httpService.put(url,data).pipe(map(this.extractData),catchError(this.handleError));
  }
  delete(data){
    let url = "/api/user";
    return this.httpService.delete(url,data).pipe(map(this.extractData),catchError(this.handleError));
  }
}
