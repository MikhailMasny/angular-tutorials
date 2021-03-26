import { Component, OnInit } from '@angular/core';

import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-board-put',
  templateUrl: './board-put.component.html',
  styleUrls: ['./board-put.component.scss']
})
export class BoardPutComponent implements OnInit {
  form: any = {
    id: 0,
    stringVar: null,
  };
  message = "";

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { id, stringVar } = this.form;

    this.requestService.put(id, stringVar).subscribe(
      data => {
        this.message = "Ok!";
      },
      err => {
        this.message = err.error.message;
      }
    );
  }

}
