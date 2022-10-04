import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import {Event, Location} from '../event'

@Component({
  selector: 'app-create-event-plantilla',
  templateUrl: './create-event-plantilla.component.html',
  styleUrls: ['./create-event-plantilla.component.css']
})
export class CreateEventPlantillaComponent implements OnInit {

  evento : Event = {
    'name' : '',
    'date' : new Date(),
    'time' : '',
    'location' : {
      'address' : '',
      'city' : '',
      'country' : ''
    }
  };
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['/events']);
  }
  onSubmit(){
    this.eventService.saveEvent(this.evento);
  }

}
