import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-detalle',
  templateUrl: './event-detalle.component.html',
  styleUrls: ['./event-detalle.component.css']
})
export class EventDetalleComponent implements OnInit {
  public reviewed : boolean = false;
  
  @Input() event : any;
  constructor(private evenService : EventsService, private route : ActivatedRoute
    , private ruta : Router) { }

  ngOnInit(): void {
    this.event = this.evenService.getEvent(this.route.snapshot.paramMap.get('name'))
  }
  returnToEvents(){
    this.ruta.navigate(['']);
  }

  cambiarReviewed(){
    this.reviewed = !this.reviewed;
  }

}
