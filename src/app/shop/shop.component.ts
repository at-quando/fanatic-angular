import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [AppService]
})
export class ShopComponent implements OnInit {
  private sub: any;
  private shopId: any;


  constructor(
    private route: ActivatedRoute,
    private _app: AppService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.shopId = params['id'];
      console.log(this.shopId);
      this
    });
  }
}
