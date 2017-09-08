import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/User';
import { CurrentUserActionService } from '../../shared/services/current-user-action.service';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-user-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss'],
  providers: [ CurrentUserActionService ]
})
export class InforComponent implements OnInit {
  id: any;
  uid: any;
  user: User;
  userCurrent: User;

  constructor(private userAction: CurrentUserActionService,
    private api: ApiService) {
    this.user= {
      name:'',
      phone: '',
      gender: '',
      address: '',
      avatar: null
    }
    this.uid = JSON.parse(localStorage.getItem('current_user')).uid;

    this.userAction.getUserInfo(this.id).subscribe(data => {});
    this.userAction._personalInfo.subscribe(userInfo => {
      this.user = userInfo;
    })
  }

  ngOnInit() {
  }

  editUserInfo(model,f) {
    if(f) {
      this.userAction.editUserInfo(this.user,this.id).subscribe(data => {});
    }
    else {
      this.api.setNotification("yellow", "Nothing happened! Your information is up to date! ");
    }
  }   
}
