import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { DetailsComponent } from './MyComponents/details/details.component';
import { UploadBookComponent } from './MyComponents/upload-book/upload-book.component';
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule,NgxUiLoaderRouterModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    UploadBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
