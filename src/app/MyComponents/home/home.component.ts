import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	arr:any;
	constructor(private apiservice:ApiService,private router:Router)
	{
		this.apiservice.getBooks().subscribe((data)=>{
			this.arr=JSON.parse(JSON.stringify(data));
			console.log(data);
		})
	}

	onClick(id:number)
	{
		console.log(id);
		let extras=
		{
			"id":id
		}
		let state=extras;
		this.router.navigateByUrl('/details',{state});
	}

	doAction(action:any)
	{
		console.log(action.target.value);
	}
}
