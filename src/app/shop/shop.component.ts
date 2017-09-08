
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
