import { Injectable } from '@angular/core';
import {Event, Location} from './event'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  EVENTS : Event[]= [
    {
      name: 'Angular Connect',
      date: new Date('9/26/2036'),
      time: '10am',
      location: {
        address: '1 London Rd',
        city: 'London',
        country: 'England'
      }
    },
    {
      name: 'ng-nl',
      date: new Date('4/15/2037'),
      time: '9am',
      location: {
        address: '127 DT ',
        city: 'Amsterdam',
        country: 'NL'
      }
    },
    {
      name: 'ng-conf 2037',
      date: new Date('4/15/2037'),
      time: '9am',
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
      }
    },
    {
      name: 'UN Angular Summit',
      date: new Date('6/10/2037'),
      time: '8am',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      }
    },
  ];

  saveEvent(event : Event): void {
    event.id = 99; 
    this.EVENTS.push(event);
  }

  getEvents(): Event[]{
    return this.EVENTS;
  }
}
