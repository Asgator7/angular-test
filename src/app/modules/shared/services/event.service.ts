import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private emitters: {
    [eventName: string]: EventEmitter<any>
  } = {};

  event(eventName: string): EventEmitter<any> {
    if (!this.emitters[eventName]) {
      this.emitters[eventName] = new EventEmitter<any>();
    }
    return this.emitters[eventName];
  }

  constructor() { }
}
