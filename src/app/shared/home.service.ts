import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{environment }from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    baseUrl=environment.dataUrl;
  constructor(private http: HttpClient) { }
    signIn(data:object):Observable<any>{
        let url=`${this.baseUrl}/api/home/signin`
        return this.http.post(url,data);
      }
      signUp(data:object):Observable<any>{
       let url=`${this.baseUrl}/api/home/signup`
        return this.http.post(url,data);
      }
    post(data:object):Observable<any>{
      let url=`${this.baseUrl}/api/home/post`
      return this.http.post(url,data);
    }

}
