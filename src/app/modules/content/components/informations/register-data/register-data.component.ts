import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-data',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'router-outlet'
  },
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.less']
})
export class RegisterDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
