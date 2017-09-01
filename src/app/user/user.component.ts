import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	uid: any;
	user: User;

  constructor(private route: ActivatedRoute) {
  	this.user= {
      name:'',
      phone: '',
      gender: '',
      address: '',
      avatar: null
    }
  }

  ngOnInit() {
  	this.route.params.subscribe(params =>{
  		this.uid = params['uid'];
  	});
  }

}
