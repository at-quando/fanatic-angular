import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../shared/services/review.service';
import { ApiService } from '../shared/services/api.service';


@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  providers: [ReviewService]
})
export class ReviewComponent implements OnInit {
	reviews: any;
	title: any;
	content: any;
	sub: any;
	productId: any;
	check: boolean;
  current_user: any;
  reviewEdit: any;

  constructor(private _review: ReviewService, private route: ActivatedRoute, private api: ApiService) {
    this.current_user=JSON.parse(localStorage.getItem('current_user'));
    this.sub = this.route.params.subscribe(params => {
      this.productId = params['id'];
      this._review.getReviewProduct(this.productId).subscribe(data => {});
      this._review._reviewSubject.subscribe(review => {
        this.reviews=review['comments'];
      });
    });
    this.reviewEdit= {
      title:  '',
      content: ''
    }
  }

  ngOnInit() {
  	this.check=this.api.checkLogin();
  }

  submitReview(title,content) {
  	this._review.addReviewProduct(title,content,this.productId).subscribe(data =>{});
  }

  enableEditForm(num) {
    if(num==1) {
      $('#form-edit').show();
      $('#content').hide();
      $('#action').hide();
    }
    else {
      $('#form-edit').hide();
      $('#content').show();
      $('#action').show();
    }
  }

  editContentAction(id,params,dirty) {
    if(dirty) {
      this._review.editReviewProduct(id,params.editTitle,params.editContent).subscribe(data =>{});
    }
    this.enableEditForm(0);
  }

  deleteComment(id) {
    this._review.deleteReviewProduct(id, this.productId).subscribe(data =>{});
  }
}