import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardGetallComponent } from './board-getall/board-getall.component';
import { BoardGetComponent } from './board-get/board-get.component';
import { BoardPostComponent } from './board-post/board-post.component';
import { BoardPutComponent } from './board-put/board-put.component';
import { BoardDeleteComponent } from './board-delete/board-delete.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardGetallComponent,
    BoardGetComponent,
    BoardPostComponent,
    BoardPutComponent,
    BoardDeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
