import { Component, OnInit } from '@angular/core';

import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-board-delete',
  templateUrl: './board-delete.component.html',
  styleUrls: ['./board-delete.component.scss']
})
export class BoardDeleteComponent implements OnInit {
  form: any = {
    id: 0,
  };
  message = "";

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { id } = this.form;

    this.requestService.delete(id).subscribe(
      data => {
        this.message = "Ok!";
      },
      err => {
        this.message = "Not found..";
      }
    );
  }
}
