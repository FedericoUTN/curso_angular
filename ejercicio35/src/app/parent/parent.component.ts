import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movies : Movie[] =[
    { name:  "Star Wars Episode X", rating: "PG" },
    { name:  "Rocky XV", rating: "PG-13" },
    { name:  "Jaws the Revenge", rating: "R" },
    { name:  "Avengers 6 - The Marriage of the Hulk", rating: "PG-13" },
    { name:  "Finding Dory's Grandkids", rating: "G" },
  ];

  constructor() { }

  ngOnInit() {
  }

  sortAsc() {
    this.movies = this.movies.sort((a: Movie , b: Movie)=>{
      if(a.rating > b.rating)
      return 1
      else if (a.rating < b.rating)
      return -1
      else return 0;
    })
  }

  sortDesc() {
    this.movies = this.movies.sort((a: Movie , b: Movie)=>{
      if(a.rating > b.rating)
      return -1
      else if (a.rating < b.rating)
      return 1
      else return 0;
    })
  }
}
interface Movie {
  name : string,
  rating : string
};