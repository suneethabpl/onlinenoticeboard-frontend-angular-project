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

    return this.http.get(url)
  }
  removeData(data:object): Observable<any> {
 
    let url=`${this.baseUrl}/api/admin/remove/${data['_id']}`;
    return this.http.delete(url);
  }

 

  updateData(data:object): Observable<any> {
    let url=`${this.baseUrl}/api/admin/update` 
    return this.http.put(url,data);
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

    let url=`${this.baseUrl}/api/admin/removenotice/${data['_id']}`;
    return this.http.delete(url);
  }


  updateNotice(data:object): Observable<any> {
    let url=`${this.baseUrl}/api/admin/updatenotice` 
    return this.http.put(url,data);
  }
}
