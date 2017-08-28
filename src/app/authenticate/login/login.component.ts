import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent {
  user_name : any;
  private sub: any;
  constructor(private _authentication: AuthenticationService) { }

  closeLoginForm() {
    var login= document.getElementById("modal-in");
    login.style.display="none";
    window.onscroll=function(){};
  }

  login() {
    var uid="sofia@ankunding.info";
    var pass="123456";
    this.sub = this._authentication.login(uid, pass).subscribe(data=>{});
  }
  // login(uid, pass) {
  //   this._authentication.login(uid, pass);
  // }
  ngDestroy() {
    this.sub.unsubscribe();
  }
}
