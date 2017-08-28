import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ui-tree-aside',
  templateUrl: './ui-tree-aside.component.html',
  styleUrls: ['./ui-tree-aside.component.scss']
})
export class UiTreeAsideComponent implements OnInit {
	@Input('data') categories: any;
	@Input('name') nameCategory: any;
	mainCategory: any;
	check=0;
		id: any;
  sub: any;
  subs:any
  name:any;

  constructor(private route: ActivatedRoute) {
 		
}

  ngOnInit() {
  	this.sub= this.route.queryParams.subscribe(params => {
      this.id= +params['id'] || 0;
      console.log(this.id);
    });
    this.subs= this.route.params.subscribe(params => {
      this.name= params['name'];
      console.log(this.name);
      console.log(12312312312312312312);
      this.findNodeInBranch().subscribe(cat => {
				this.mainCategory= cat;
      });
      console.log(this.mainCategory);
    });
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  	this.subs.unsubscribe();
  }

  findNodeInBranch() {
  		for(var k in this.categories["category"]) {		
  			this.scan(this.categories["category"][k],this.name);
  			if(this.check==1) {
  				return this.categories["category"][k];
  			}	
  			else {
  			}
 			}
 		}

  scan(obj,name) {
	  var k;  
	  if (!Array.isArray(obj)) {
	    for (k in obj) {
	      if (obj.hasOwnProperty(k)){
	     		if(k!=name) {
	     			this.scan(obj[k],name);
	     		}
					else {
	          return obj[k];	
	        } 
	      }                 
	    }
	  }
	  else {
	    for(k in obj) {
	      if(obj[k].title.toLowerCase()==name) {
	      	console.log(obj[k].title.toLowerCase()==name);
	    		this.check=1;
	    		console.log(this.check);
	    	}
	    	else {
	    	}
			}
	  }
	}
}

  

