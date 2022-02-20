import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'router-outlet'
  },
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.less']
})
export class InitialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
