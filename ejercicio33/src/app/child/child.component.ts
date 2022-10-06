import { Component, OnInit, Input } from '@angular/core';
import {OnChanges} from '@angular/core'
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() quantity;
  squaredQuantity: number;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void{
    this.squaredQuantity = Math.pow(changes.quantity.currentValue, 2);
  }
}
