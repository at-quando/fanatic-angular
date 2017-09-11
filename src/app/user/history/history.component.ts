import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentUserActionService } from '../../shared/services/current-user-action.service';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  providers: [ CurrentUserActionService ]
})
export class HistoryComponent implements OnInit {
  private history: any;

  constructor(private userAction: CurrentUserActionService,
    private api: ApiService) {
  }

  ngOnInit() {
    this.userAction.historyUser().subscribe(data => {})
    this.userAction._persionalHistory.subscribe(userHistory => {
      this.history = userHistory;
    })
  }
}
