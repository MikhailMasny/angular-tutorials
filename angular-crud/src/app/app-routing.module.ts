import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BoardGetallComponent } from './board-getall/board-getall.component';
import { BoardGetComponent } from './board-get/board-get.component';
import { BoardPostComponent } from './board-post/board-post.component';
import { BoardPutComponent } from './board-put/board-put.component';
import { BoardDeleteComponent } from './board-delete/board-delete.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "getall", component: BoardGetallComponent },
  { path: "get", component: BoardGetComponent },
  { path: "post", component: BoardPostComponent },
  { path: "put", component: BoardPutComponent },
  { path: "delete", component: BoardDeleteComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
