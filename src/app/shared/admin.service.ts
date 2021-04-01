import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.dataUrl;
  constructor(private http: HttpClient) { }

  readData():Observable<any> {
    let url=`${this.baseUrl}/api/admin/read`
    // console.log(123)
    return this.http.get(url)
  }
  removeData(data:object): Observable<any> {
    // console.log(data)
    let url=`${this.baseUrl}/api/admin/remove/${data['_id']}`;
    return this.http.delete(url);
  }

  // createData(data: object): Observable<any> {
  //   let url = `${this.baseUrl}/api/admin/create`
  //   // console.log("i am from service",data)
  //   return this.http.post(url, data)
  // }

  updateData(data:object): Observable<any> {
    let url=`${this.baseUrl}/api/admin/update` //this url for data goes to backend/we send data to backend//here we give update because in admin.js, we give update in put handler
    // console.log(data);
    return this.http.put(url,data);//send the url and data to backend. 
  }

  postNotice(data:object):Observable<any>{
    let url=`${this.baseUrl}/api/admin/new`;
    return this.http.post(url,data);
  }

  getNotice():Observable<any>{
    let url=`${this.baseUrl}/api/admin/msgblog`;
    return this.http.get(url);
  }

  removeNotice(data:object): Observable<any> {
    // console.log(data)
    let url=`${this.baseUrl}/api/admin/removenotice/${data['_id']}`;
    return this.http.delete(url);
  }


  updateNotice(data:object): Observable<any> {
    let url=`${this.baseUrl}/api/admin/updatenotice` //this url for data goes to backend/we send data to backend//here we give update because in admin.js, we give update in put handler
    // console.log(data);
    return this.http.put(url,data);//send the url and data to backend. 
  }
}
