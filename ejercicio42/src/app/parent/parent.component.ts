import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { ParentService , Movie} from '../parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList: Movie[] = [];

  constructor(private service: ParentService) { }

  ngOnInit() {
  }

  makeRequest() {
    this.service.getMovies().subscribe((data)=>{
      console.log(data);
      this.movieList = data;
    })
  }
}
