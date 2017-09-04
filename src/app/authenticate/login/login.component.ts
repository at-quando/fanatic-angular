import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authenticate.service';
import { User } from '../../shared/models/User' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent {
  user_name: any;
  private sub: any;
  uid: string = '';
  pass: string = '';
  uidCreate: string = '';
  passCreate: string = '';
  user: User;
  constructor(private _authentication: AuthenticationService) {
    this.user= {
      name:'',
      phone: '',
      gender: '',
      address: '',
      avatar: null
    }
 }

  closeLoginForm() {
    var login = document.getElementById("modal-in");
    login.style.display = "none";
    window.onscroll = function() { };
  }

  login() {
    this._authentication.login(this.uid, this.pass).subscribe(
      data => {},
      error => { 
        if(error) {
          var noti = document.getElementById("noti-danger");
          noti.style.display = "block";
          setTimeout(function(){ noti.style.display = "none"; }, 2000);
        }
      }
      );
  }
  
  signup(model) {
    this._authentication.signup(this.user, model.email, model.password).subscribe(data=>{});
   
  }
  //off a and turn b
  enableForm(login,signup) { 
    var a = document.getElementById(login);
    var b = document.getElementById(signup);
    var navLogin = document.getElementById(`nav-${login}`);
    var navSignup = document.getElementById(`nav-${signup}`);
    a.style.display = "none";
    b.style.display = "block";
    navLogin.classList.remove("actived");
    navSignup.classList.add("actived");
  }

  ngDestroy() {
    this.sub.unsubscribe();
  }
}
