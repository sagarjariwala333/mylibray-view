import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { DetailsComponent } from './MyComponents/details/details.component';
import { UploadBookComponent } from './MyComponents/upload-book/upload-book.component';

const routes: Routes = [
	{
		path:"",
		component:HomeComponent
	},
	{
		path:"details",
		component:DetailsComponent
	},
	{
		path:"uploadBook",
		component:UploadBookComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
