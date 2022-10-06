import { Component, OnInit } from '@angular/core';
import { Observable, pipe, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  subject: Subject<string> ;
  output = [];
  
  constructor() {
    this.subject = new Subject<string>();
   }

  ngOnInit() {
    this.logica(this.subject) 
    .subscribe(key => {
      this.output.push(key);
      console.log(this.output);
    });
  }

  keypress(e) {
    this.subject.next(e.key);
  }

  logica = pipe(
    map((key:string)=> key.toUpperCase())
  )
  
}
