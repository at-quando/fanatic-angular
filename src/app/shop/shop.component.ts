import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
	@Input('shop') shop: any;

  constructor() { }

  ngOnInit() {
  }

}
