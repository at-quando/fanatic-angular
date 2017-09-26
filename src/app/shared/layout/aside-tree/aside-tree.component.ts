import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'aside-tree',
  templateUrl: './aside-tree.component.html',
  styleUrls: ['./aside-tree.component.scss']
})
export class AsideTreeComponent implements OnInit {
  @Input('data') mainCategory: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
