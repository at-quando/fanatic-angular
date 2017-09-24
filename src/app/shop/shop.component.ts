import { AppService } from '../shared/services/app.service'
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [AppService]
})
export class ShopComponent implements OnInit {
	@Input('shop') shop: any;

  constructor(
    private _app: AppService
  ) { }

  ngOnInit() {
  }

  topPage(){
     window.scrollTo(0, 0);
  }
}
