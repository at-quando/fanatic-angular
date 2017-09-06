import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {BehaviorSubject, Subject, Subscriber} from 'rxjs';
import {Router} from '@angular/router';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class CurrentUserActionService {
  private apiURL = "http://localhost:3000";
  _personalInfo: Subject<any> = new Subject<any>();
  constructor(private http: Http, private router: Router, private api: ApiService) {
  }

  getUserInfo = (id) => {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${environment.apiURL}/users/${id}`, options).map((response: Response) => {
      let _user = response.json();
      if (_user) {
        this._personalInfo.next(_user);
      }
    });
  }

  editUserInfo = (user,id) => {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(`${environment.apiURL}/users/${id}`,JSON.stringify(user), options).map((response: Response) => {
      this.api.setNotification("green","Your Information are updated!");
      var currentUser=JSON.parse(localStorage.getItem('current_user'));
      currentUser.user_name = user.name;
      localStorage.setItem('current_user',JSON.stringify(currentUser));
    })
    .catch((err: Response) => {
      this.api.setNotification("red","Something went wrong now! Please try again later!")
      return Observable.throw(err);
    });
  }
}
