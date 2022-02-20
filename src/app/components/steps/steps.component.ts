import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.less']
})
export class StepsComponent implements OnInit {

  public steps: any = [];
  public activeStep = 3;

  constructor() { }

  ngOnInit(): void {
    this.mountSteps();
  }

  mountSteps(): void {
    this.steps = [
      {
        name: 'Início',
        link: '/initial',
        value: 1
      },
      {
        name: 'Documentos',
        link: '/documents',
        value: 2
      },
      {
        name: 'Dados cadastrais',
        link: '/register-data',
        value: 3
      },
      {
        name: 'Admissão',
        link: '/admission',
        value: 4
      },
    ];
  }

}
