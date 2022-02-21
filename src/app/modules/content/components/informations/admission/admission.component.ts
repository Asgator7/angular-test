import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'router-outlet'
  },
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.less']
})
export class AdmissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
