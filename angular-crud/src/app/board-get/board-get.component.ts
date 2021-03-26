import { Component, OnInit } from '@angular/core';

import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-board-get',
  templateUrl: './board-get.component.html',
  styleUrls: ['./board-get.component.scss']
})
export class BoardGetComponent implements OnInit {
  parentModel: any;
  form: any = {
    id: 0,
  };
  message = "";

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { id } = this.form;

    this.requestService.get(id).subscribe(
      data => {
        this.parentModel = data;
        this.message = "Ok!";
      },
      err => {
        this.parentModel = null;
        this.message = "Not found..";
      }
    );
  }
}
