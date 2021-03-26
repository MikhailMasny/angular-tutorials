import { Component, OnInit } from '@angular/core';

import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-board-getall',
  templateUrl: './board-getall.component.html',
  styleUrls: ['./board-getall.component.scss']
})
export class BoardGetallComponent implements OnInit {
  parentModels: any;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getAll().subscribe(
      data => {
        this.parentModels = data;
      },
      err => {
        this.parentModels = JSON.parse(err.error).message;
      }
    );
  }
}
