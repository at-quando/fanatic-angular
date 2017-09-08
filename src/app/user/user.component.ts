import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/User';
import { CurrentUserActionService } from '../shared/services/current-user-action.service';
import { ApiService } from '../shared/services/api.service';
import { InforComponent } from './infor/infor.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [ CurrentUserActionService ]
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private userAction: CurrentUserActionService,
              private api: ApiService) {
    this.user= {
      name:'',
      phone: '',
      gender: '',
      address: '',
      avatar: null
    }

    this.route.queryParams.subscribe(params =>{
      this.id = params['id'];
      this.uid = params['uid'];
      this.userAction.getUserInfo(this.id).subscribe(data => {});
      this.userAction._personalInfo.subscribe(userInfo => {
        this.user = userInfo;
      })
    });
  }   

  ngOnInit() {
  }
}
