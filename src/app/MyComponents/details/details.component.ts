import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
	
	bookid!:number;
	name!:string;
	author!:string;
	summary!:string;
	data!:any;
	list:Array<any>;


	constructor(private api:ApiService) {
		this.list=new Array();
	}


	ngOnInit()
	{
		this.bookid=history.state.id;
		

		this.api.getBookDetails(this.bookid).subscribe((data)=>{

			console.log("Details component "+this.bookid);
			//console.log(this.bookid);
			this.data=JSON.parse(JSON.stringify(data));
			console.log(data);
			this.list.push(data);
			//this.data=JSON.parse(JSON.stringify(this.list));

			this.name=this.data.name;
			this.author=this.data.author;
			this.summary=this.data.summary;

			console.log(this.name);
		});
		//console.log(history.state);
	}
}
