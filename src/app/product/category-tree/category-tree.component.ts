import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {
	@Input('name') nameCategory: any;
	categories: any;
	mainCategory: any;
	sub: any;
	subs: any;

  constructor(private route: ActivatedRoute) { 
  	this.categories = {
    "category": {
        "Electronic": {
            "Computer": [
                    {
                    "id": 14,
                    "title": "Laptop",
                    "parent_id": 2,
                    "lft": 3,
                    "rgt": 4,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:36.000Z",
                    "updated_at": "2017-08-25T04:34:37.000Z"
                    },
                    {
                    "id": 15,
                    "title": "PC",
                    "parent_id": 2,
                    "lft": 5,
                    "rgt": 6,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:36.000Z",
                    "updated_at": "2017-08-25T04:34:37.000Z"
                },
                {
                    "id": 16,
                    "title": "Console",
                    "parent_id": 2,
                    "lft": 7,
                    "rgt": 8,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:36.000Z",
                    "updated_at": "2017-08-25T04:34:37.000Z"
                }
            ],
            "Phone & Tablet": [
                {
                    "id": 10,
                    "title": "Tablet",
                    "parent_id": 3,
                    "lft": 11,
                    "rgt": 12,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:35.000Z",
                    "updated_at": "2017-08-25T04:34:37.000Z"
                },
                {
                    "id": 11,
                    "title": "Mobile phone",
                    "parent_id": 3,
                    "lft": 13,
                    "rgt": 14,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:35.000Z",
                    "updated_at": "2017-08-25T04:34:37.000Z"
                },
                {
                    "id": 12,
                    "title": "Accossories",
                    "parent_id": 3,
                    "lft": 15,
                    "rgt": 18,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:36.000Z",
                    "updated_at": "2017-08-25T04:34:37.000Z"
                }
            ],
            "Camera & Recorder": [
                {
                    "id": 17,
                    "title": "Action camera",
                    "parent_id": 4,
                    "lft": 21,
                    "rgt": 22,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:36.000Z",
                    "updated_at": "2017-08-25T04:34:37.000Z"
                },
                {
                    "id": 18,
                    "title": "Digital camera",
                    "parent_id": 4,
                    "lft": 23,
                    "rgt": 24,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:36.000Z",
                    "updated_at": "2017-08-25T04:34:37.000Z"
                }
            ],
            "TV & Digital devices": [
                {
                    "id": 19,
                    "title": "Men's watch",
                    "parent_id": 5,
                    "lft": 27,
                    "rgt": 28,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:37.000Z",
                    "updated_at": "2017-08-25T04:34:37.000Z"
                },
                {
                    "id": 20,
                    "title": "Women's watch",
                    "parent_id": 5,
                    "lft": 29,
                    "rgt": 30,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:37.000Z",
                    "updated_at": "2017-08-25T04:34:37.000Z"
                }
            ]
        },
        "Clothes": {
            "Men's clothes": [
                {
                    "id": 21,
                    "title": "Men's shoes",
                    "parent_id": 7,
                    "lft": 35,
                    "rgt": 36,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:37.000Z",
                    "updated_at": "2017-08-25T04:34:38.000Z"
                },
                {
                    "id": 24,
                    "title": "Men's wear",
                    "parent_id": 7,
                    "lft": 37,
                    "rgt": 38,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:37.000Z",
                    "updated_at": "2017-08-25T04:34:38.000Z"
                }
            ],
            "Women's clothes": [
                {
                    "id": 22,
                    "title": "Women's shoes",
                    "parent_id": 8,
                    "lft": 41,
                    "rgt": 42,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:37.000Z",
                    "updated_at": "2017-08-25T04:34:38.000Z"
                },
                {
                    "id": 25,
                    "title": "Women's wear",
                    "parent_id": 8,
                    "lft": 43,
                    "rgt": 44,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:37.000Z",
                    "updated_at": "2017-08-25T04:34:38.000Z"
                }
            ],
            "Child's clothes": [
                {
                    "id": 23,
                    "title": "Child's shoes",
                    "parent_id": 9,
                    "lft": 47,
                    "rgt": 48,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:37.000Z",
                    "updated_at": "2017-08-25T04:34:38.000Z"
                },
                {
                    "id": 26,
                    "title": "Child's wear",
                    "parent_id": 9,
                    "lft": 49,
                    "rgt": 50,
                    "depth": 2,
                    "children_count": 0,
                    "created_at": "2017-08-25T04:34:37.000Z",
                    "updated_at": "2017-08-25T04:34:38.000Z"
                }
            ]
        }
    }
}	
	}

  ngOnInit() {
  }

  
}

