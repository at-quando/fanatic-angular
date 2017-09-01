import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {
  categories: any;
  mainCategory: any;
  sub: any;
  check: any;
  name: any;
  currentObj: any;
  path: any;
  currentObjTitle: any;

  constructor(private route: ActivatedRoute) {
    this.check = 0;
    this.path = "";
    this.categories = {
      "category": {
        "Electronic": {
          "Computer": [
            {
              "id": 15,
              "title": "Laptop",
              "parent_id": 2,
              "lft": 3,
              "rgt": 4,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:16.000Z",
              "updated_at": "2017-08-29T01:45:17.000Z"
            },
            {
              "PC": [
                {
                  "id": 19,
                  "title": "RAM",
                  "parent_id": 16,
                  "lft": 6,
                  "rgt": 7,
                  "depth": 3,
                  "children_count": 0,
                  "created_at": "2017-08-29T01:45:16.000Z",
                  "updated_at": "2017-08-29T01:45:17.000Z"
                },
                {
                  "id": 20,
                  "title": "Vega",
                  "parent_id": 16,
                  "lft": 8,
                  "rgt": 9,
                  "depth": 3,
                  "children_count": 0,
                  "created_at": "2017-08-29T01:45:16.000Z",
                  "updated_at": "2017-08-29T01:45:17.000Z"
                }
              ]
            },
            {
              "Console": [
                {
                  "id": 18,
                  "title": "PS4",
                  "parent_id": 17,
                  "lft": 12,
                  "rgt": 13,
                  "depth": 3,
                  "children_count": 0,
                  "created_at": "2017-08-29T01:45:16.000Z",
                  "updated_at": "2017-08-29T01:45:17.000Z"
                }
              ]
            }
          ],
          "Phone & Tablet": [
            {
              "id": 10,
              "title": "Tablet",
              "parent_id": 3,
              "lft": 17,
              "rgt": 18,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:15.000Z",
              "updated_at": "2017-08-29T01:45:17.000Z"
            },
            {
              "id": 11,
              "title": "Mobile phone",
              "parent_id": 3,
              "lft": 19,
              "rgt": 20,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:15.000Z",
              "updated_at": "2017-08-29T01:45:17.000Z"
            },
            {
              "Accossories": [
                {
                  "id": 13,
                  "title": "Bao da",
                  "parent_id": 12,
                  "lft": 22,
                  "rgt": 23,
                  "depth": 3,
                  "children_count": 0,
                  "created_at": "2017-08-29T01:45:15.000Z",
                  "updated_at": "2017-08-29T01:45:17.000Z"
                },
                {
                  "id": 14,
                  "title": "Battery",
                  "parent_id": 12,
                  "lft": 24,
                  "rgt": 25,
                  "depth": 3,
                  "children_count": 0,
                  "created_at": "2017-08-29T01:45:15.000Z",
                  "updated_at": "2017-08-29T01:45:17.000Z"
                }
              ]
            }
          ],
          "Camera & Recorder": [
            {
              "id": 21,
              "title": "Action camera",
              "parent_id": 4,
              "lft": 29,
              "rgt": 30,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:16.000Z",
              "updated_at": "2017-08-29T01:45:17.000Z"
            },
            {
              "id": 22,
              "title": "Digital camera",
              "parent_id": 4,
              "lft": 31,
              "rgt": 32,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:16.000Z",
              "updated_at": "2017-08-29T01:45:17.000Z"
            }
          ],
          "TV & Digital devices": [
            {
              "id": 23,
              "title": "Smart TV",
              "parent_id": 5,
              "lft": 35,
              "rgt": 36,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:17.000Z",
              "updated_at": "2017-08-29T01:45:17.000Z"
            },
            {
              "id": 24,
              "title": "Big TV",
              "parent_id": 5,
              "lft": 37,
              "rgt": 38,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:17.000Z",
              "updated_at": "2017-08-29T01:45:17.000Z"
            }
          ]
        },
        "Clothes": {
          "Men's clothes": [
            {
              "id": 25,
              "title": "Men's shoes",
              "parent_id": 7,
              "lft": 43,
              "rgt": 44,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:17.000Z",
              "updated_at": "2017-08-29T01:45:18.000Z"
            },
            {
              "id": 28,
              "title": "Men's wear",
              "parent_id": 7,
              "lft": 45,
              "rgt": 46,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:17.000Z",
              "updated_at": "2017-08-29T01:45:18.000Z"
            }
          ],
          "Women's clothes": [
            {
              "id": 26,
              "title": "Women's shoes",
              "parent_id": 8,
              "lft": 49,
              "rgt": 50,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:17.000Z",
              "updated_at": "2017-08-29T01:45:18.000Z"
            },
            {
              "id": 29,
              "title": "Women's wear",
              "parent_id": 8,
              "lft": 51,
              "rgt": 52,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:17.000Z",
              "updated_at": "2017-08-29T01:45:18.000Z"
            }
          ],
          "Child's clothes": [
            {
              "id": 27,
              "title": "Child's shoes",
              "parent_id": 9,
              "lft": 55,
              "rgt": 56,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:17.000Z",
              "updated_at": "2017-08-29T01:45:18.000Z"
            },
            {
              "id": 30,
              "title": "Child's wear",
              "parent_id": 9,
              "lft": 57,
              "rgt": 58,
              "depth": 2,
              "children_count": 0,
              "created_at": "2017-08-29T01:45:17.000Z",
              "updated_at": "2017-08-29T01:45:18.000Z"
            }
          ]
        }
      }
    }
  }

  ngOnInit() {
    if (this.check == 0) {
      this.sub = this.route.params.subscribe(params => {
        this.name = params['name'];
        this.mainCategory = this.findNodeInBranch(this.categories["category"]);
        this.paths(this.mainCategory, this.name);
      });
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  findNodeInBranch(obj) {
    this.check = 0;
    for (var k in obj) {
      this.scan(obj[k], this.name);
      if (this.check == 1) {
        return obj[k];
      }
    }
  }


  paths(root, name) {
    let paths = [];
    let nodes = [{
      obj: root,
      path: []
    }];
    while (nodes.length > 0) {
      let n = nodes.pop();
      let path;
      Object.keys(n.obj).forEach(k => {
        let path;
        if (typeof n.obj[k] === "object") {
          if (n.obj[k].title) {
            path = n.path.concat(n.obj[k].title);
            if (n.obj[k].title.toLowerCase() == name) {
              this.path = path;
            }
          }
          else {
            path = n.path.concat(k);
            if (k.toLowerCase() == name) {
              this.path = path;
            }
          }
          paths.push(path);
          nodes.unshift({
            obj: n.obj[k],
            path: path
          });
        }
      });
    }
  }

  scan(obj, name) {
    var k;
    if (typeof obj === "object") {
      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          if (obj[k].title) {
            if (obj[k].title.toLowerCase() == name) {
              this.check = 1;
              this.currentObj = obj[k];
              return obj[k];
            }
          }
          else {
            if (k.toLowerCase() == name) {
              this.check = 1;
              this.currentObj = obj[k];
              return obj[k];
            }
            this.scan(obj[k], name);
          }
        }
      }
    }
  }
}
