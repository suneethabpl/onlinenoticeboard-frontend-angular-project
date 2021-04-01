import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = environment.dataUrl;
  constructor(private http: HttpClient) { }

  rcvNotice(): Observable<any> {
    let batch = localStorage.getItem('batchnumber');
    // let url=`${this.baseUrl}/api/student/viewnotice`;
    let url = `${this.baseUrl}/api/student/viewnotice/${batch}`;
    return this.http.get(url);
  }

  rcvProfile(): Observable<any> {
    let emailid = localStorage.getItem('username');
    let url = `${this.baseUrl}/api/student/viewprofile/${emailid}`;
    return this.http.get(url);
  }
  updateData(data: object): Observable<any> {
    let url = `${this.baseUrl}/api/student/updateprofile`;
    return this.http.put(url, data);
  }
    updatePwd(data:object):Observable<any>{
    let emailid = localStorage.getItem('username');
    //we set username in localstorage previosely in login component in home feature so get the username.
    //we take previousely emailid as unquie then that's why we take emailid variable.
        let url=`${this.baseUrl}/api/student/editpwd/${emailid}`;
        return this.http.put(url,data);
      }
}
