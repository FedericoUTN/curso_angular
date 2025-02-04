import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events : any;

  constructor(private eventsService : EventsService) { 
    this.events = eventsService.getEvents();
  }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

}
