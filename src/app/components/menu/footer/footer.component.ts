import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  public isLoaded = false;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventService.event('cpfLoaded').subscribe(
      () => {
        this.isLoaded = true;
      }
    );
  }

  newAdmission(): void {
    this.isLoaded = false;
    this.eventService.event('newAdmission').emit();
  }

}
