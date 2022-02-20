import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-situation-card',
  templateUrl: './situation-card.component.html',
  styleUrls: ['./situation-card.component.less']
})
export class SituationCardComponent implements OnInit {

  @Input() info: any;

  constructor() { }

  ngOnInit(): void {
  }

}
