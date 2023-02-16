import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

	//url:string='http://localhost:3000/book/';
  url:string='https://mylibrary-api-rub.vercel.app/book/';

  constructor(private http:HttpClient) { }

  getBooks()
  {
  	return this.http.get(this.url);
  }

  getBookDetails(id:number)
  {
  	let obj=
  	{
  		"id":id
  	}
  	console.log("Service..");
  	console.log(obj);
  	return this.http.post(this.url+"getBookDetails",obj);
  }

  insertBook(name:string,author:string,summary:string,filename:String)
  {
  	let obj=
  	{
  		"name":name,
  		"author":author,
  		"summary":summary,
  		"location":filename,
  		"isActive":true,
  		"isDeleted":false
  	}

  	return this.http.post(this.url+"insertBook",obj);
  }

  getFile(formData:FormData)
  {
  	return this.http.post(this.url+"uploadBook",formData);
  }
}
