import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.less']
})
export class StepsComponent implements OnInit {

  public steps: any = [];
  public activeStep = 1;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mountSteps();
  }

  mountSteps(): void {
    this.steps = [
      {
        name: 'Início',
        link: '/',
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

  goToStep(step: string, canGo: boolean): void {
    if (canGo) {
      this.router.navigate([step]);
    }
  }
}
