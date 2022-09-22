import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 @Output() emitCounter = new EventEmitter<number>();
 counter = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => { this.counter++ }, 1000);
  }

  buttonClicked(): void {
    this.emitCounter.emit(this.counter);
  }
}
