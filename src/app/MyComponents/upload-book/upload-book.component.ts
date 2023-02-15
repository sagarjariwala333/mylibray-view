import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { RouterModule, Routes,Router } from '@angular/router';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-upload-book',
  templateUrl: './upload-book.component.html',
  styleUrls: ['./upload-book.component.css']
})
export class UploadBookComponent {
	name!:string;
	author!:string;
	summary!:string;
	file!:File;
	filename!:string;

	constructor(private api:ApiService,private router:Router,private ngxService: NgxUiLoaderService) {}

	delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
   }

	onFileChange(event:any)
	{
		this.file = event.target.files[0];

		let formData = new FormData();
		formData.append('file',this.file);

		this.api.getFile(formData).subscribe((res)=>{
			console.log(res);
			let jsonData=JSON.parse(JSON.stringify(res));
			console.log("Response "+jsonData.filename);
			this.filename=jsonData.filename;
		});
	}

	async onClick()
	{
		this.ngxService.startBackground();
		await this.delay(2000);
		this.ngxService.stopBackground();

		this.api.insertBook(this.name,this.author,this.summary,this.filename)
		.subscribe((res)=>{
			console.log(res);
			this.delay(2000);
			this.router.navigateByUrl("/");
			//alert("Book added successfully");
		});
	}
}
