import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { EventService } from 'src/app/modules/shared/services/event.service';

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

  constructor(
    private sharedService: SharedService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventService.event('newAdmission').subscribe(
      () => {
        this.response = null;
        this.initialForm.reset();
      }
    );
  }


  submitCPF(): void {
    const control = this.initialForm.get('cpf');
    this.loading = true;
    setTimeout(() => { // Set timeout só para aparecer a animação de carregando
      this.sharedService.verifyCpfAndGetName(control.value).subscribe(
        (response: any) => {
          this.response = response;
          this.eventService.event('cpfLoaded').emit();
        },
        (cpfInvalid: any) => {
          control.setErrors({ cpfInvalid });
        }
      );
      this.loading = false;
    }, 2000);
  }
}
