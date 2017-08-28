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

  pushTokenFacebook = (user) => {
    let headers = new Headers({ 
      'Content-Type': 'application/json',
      'Access-Token': user.accessToken,
      'Uid': user.userID,
      'Provider': 'facebook' });
    let options = new RequestOptions({ headers: headers });
    console.log(headers);
    return this.http.post(this.apiURL + "/omni_auth",JSON.stringify({}), options).map((response: Response) => {
      let _headers = response.headers;
       console.log(response);
      if (_headers) {
          let access_token = _headers.get('access-token');
          let avatar = _headers.get('avatar');
          let name = _headers.get('name');
          let uid = _headers.get('uid');
          let provider = _headers.get('provider');
          localStorage.setItem('current_user', JSON.stringify({ access_token: access_token, uid: uid, provider: provider, avatar: avatar, name: name }));
        }
    });
  }

  logout = () => {
    let currentUser = JSON.parse(localStorage.getItem('current_user'));
    let headers = new Headers({ 
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Token': currentUser.access_token,
      'Uid': currentUser.uid,
      'Provider': currentUser.provider });
    console.log(headers);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.apiURL + `/session/1`, options)
      .map((response: Response) => {
        console.log(1234);
         localStorage.removeItem('current_user');
      });
  }

}