import { Component, OnInit } from '@angular/core';

import { RequestService } from '../_services/request.service';

@Component({
  selector: 'app-board-post',
  templateUrl: './board-post.component.html',
  styleUrls: ['./board-post.component.scss']
})
export class BoardPostComponent implements OnInit {
  form: any = {
    stringVar: null,
  };
  message = "";

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { stringVar } = this.form;

    this.requestService.post(stringVar).subscribe(
      data => {
        this.message = "Ok!";
      },
      err => {
        this.message = err.error.message;
      }
    );
  }

}
