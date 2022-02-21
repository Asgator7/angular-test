import { Injectable } from '@angular/core';

import { cpf } from 'cpf-cnpj-validator';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  verifyCpfAndGetName(analisedCpf: string): Observable<any> {
    const isValid = cpf.isValid(analisedCpf);
    let observable = new Observable();
    if (isValid) {
      observable = new Observable(observer => {
        observer.next({
          register: {
            name: 'Mariane de Sousa Oliveira',
            situation: 'Regular',
            type: 'register-situation'
          },
          application: {
            title: 'Conta aplicação',
            account_number: '557932-4',
            type: 'cooperative'
          },
          checking: {
            title: 'Conta corrente',
            account_number: '778461-8',
            type: 'cooperative'
          }
        });
      });
    } else {
      observable = throwError({ cpfInvalid: true });
    }
    return observable;
  }
}
