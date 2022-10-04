import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Event, Location} from '../event'

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  evento : Event;
  constructor(private eventService: EventService, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }
  onSubmit(){
    this.evento = this.eventForm.value;
    this.eventService.saveEvent(this.evento);
  }
  /*eventForm = new FormGroup({
    nameForm : new FormControl(''),
    dateForm : new FormControl(''),
    timeForm : new FormControl(''),
    locationForm : new FormGroup({
      addressForm : new FormControl(''),
      cityForm : new FormControl(''),
      countryForm : new FormControl('')

    })
  })*/  //! sin formbuilder

  eventForm = this.fb.group({
    name : ['', Validators.required],
    date : ['', [Validators.required, this.validadorFinSemana]],
    time : ['', Validators.required],
    location : this.fb.group({
      address : ['', Validators.required],
      city : ['', Validators.required],
      country : ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2), Validators.pattern('^[A-Z]*$')]]

    })
  })

  validadorFinSemana(control : FormControl): {[key : string]: any} | null{
    const fecha = new Date(control.value);
    if(fecha.getDay() === 6 || fecha.getDay() === 0){
      console.log('es feriado');
      return {feriado : 'Es feriado'};
    }
    console.log('no es feriado')
    return null
  }
  
}
