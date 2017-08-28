import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {BehaviorSubject, Subject, Subscriber} from 'rxjs';

@Injectable()
export class AuthenticationService {
  private apiURL = "http://172.17.19.240:3001"
  constructor(private http: Http) { }


  login = (email: string, password: string) => {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURL + "/session", JSON.stringify({ uid: email, password: password }), options)
      .map((response: Response) => {
        let _body = response.json();
        // if (_headers) {
        //   let access_token = _headers.get('access-token');
        //   let uid = _headers.get('uid');
        //   let provider = _headers.get('provider');
        //   let user_name = `${response.json().first_name} ${response.json().last_name}`;
        //   localStorage.setItem('current_user', JSON.stringify({ access_token: access_token, user_name: user_name, uid: uid, provider: provider }));
        // }
        console.log(_body);
      });
  }
}