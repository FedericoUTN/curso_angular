import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  displayedMovies : Movie[];

  movies : Movie[]= [
    { name:  "Star Wars Episode X", rating: "PG" },
    { name:  "Rocky XV", rating: "PG-13" },
    { name:  "Jaws the Revenge", rating: "R" },
    { name:  "Avengers 6 - The Marriage of the Hulk", rating: "PG-13" },
    { name:  "Finding Dory's Grandkids", rating: "G" },
  ];

  constructor() {
    this.displayedMovies = this.movies.slice();
   }

  ngOnInit() {
  }

  filter(rating: string) {
    this.displayedMovies = this.movies.slice().filter((mov)=> mov.rating === rating)
  }

}
interface Movie {
  name : string,
  rating : string
};