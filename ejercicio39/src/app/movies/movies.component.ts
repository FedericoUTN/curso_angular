import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : Movie[]= [
    {name: "Star Wars", rating: 'R', id: 1},  
    {name: "Jaws", rating: 'PG', id: 2},  
    {name: "E.T.", rating: 'R', id: 3},  
    {name: "Teen Wolf", rating: 'G', id: 4},  
    {name: "Ferris Bueller's Day Off", rating: 'G', id: 5},  
  ]
  currentMovie: Movie;
  observableMovie= of(this.movies);
  
  constructor(private route: ActivatedRoute) {

  }
  
  ngOnInit() {
    //let id : number = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((movie)=>{
      let id = +movie.get('id');
      this.currentMovie = this.movies.find((mov)=>mov.id === id);
    })
    
  }

}
interface Movie {
  name : string,
  rating: string,
  id: number
}