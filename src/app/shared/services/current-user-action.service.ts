import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {BehaviorSubject, Subject, Subscriber} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class CurrentUserActionService {
  private apiURL = "http://localhost:3000";
  _personalInfo: Subject<any> = new Subject<any>();
  constructor(private http: Http, private router: Router) {
  }

  getUserInfo = (uid) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Uid': uid
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.apiURL + "/edit", options).map((response: Response) => {
      let _header = response.headers;
      console.log(_header);
      if (_header) {
       //get info and order
      }
    });
  }

  editUserInfo = (user) => {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURL + "/edit", options).map((response: Response) => {
      let _header = response.headers;
      console.log(_header);
      if (_header) {
       //get info and order
      }
    });
  }
}
