import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  appid = "69bc9bb1bbaa496601358677ea57a017";
  forecast;
  city : string;

  constructor(private service : WeatherService) { }

  ngOnInit() {
  }

  makeRequest() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&APPID=" + this.appid;
    this.service.getWeather(url).subscribe(
      (data)=> this.forecast = data
    )
  }

}
