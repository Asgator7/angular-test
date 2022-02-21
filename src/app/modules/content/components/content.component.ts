import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'content-component'
  },
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
