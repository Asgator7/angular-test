import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { cpf } from 'cpf-cnpj-validator';

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

  public loading = false;
  public response: any;
  public initialForm: any = new FormGroup({
    cpf: new FormControl(
      { value: '', disabled: false }, Validators.compose([Validators.required])
    )
  });

  constructor() { }

  ngOnInit(): void {
  }


  submitCPF(): void {
    const control = this.initialForm.get('cpf');
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      cpf.isValid(control.value) ? control.setErrors(null) : control.setErrors({ cpfInvalid: true });
      this.response = {
        name: 'Mariane de Sousa Oliveira',
        situation: 'Regular'
      }
    }, 2000);
  }
}