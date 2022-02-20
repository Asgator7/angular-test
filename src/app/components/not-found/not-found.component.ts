import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'not-found-component'
  },
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
