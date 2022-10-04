import { Component, OnInit } from '@angular/core';
import { Observable, of, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  obs : Observable<number>;
  result : number;
  promise;

  constructor() { 
    this.obs = of(35);
  }

  ngOnInit() {
    // ingrese el código aquí
    this.promise = lastValueFrom(this.obs);
  }

  listen() {
    this.promise.then((val : number) => {
      this.result = val;
    })
  }

}
