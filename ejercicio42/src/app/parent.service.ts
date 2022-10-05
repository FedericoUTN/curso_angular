import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

const url = 'http://swapi.co/api/films/';
@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http : HttpClient) { }

  getMovies(){
    console.log("prueba1");
    return this.http.get<Movie[]>("https://swapi.dev/api/films/"
    )
  }
}

export class Movie {
public characters? : string[];
public created? : string;
public director? : string;
public edited? : string | Date;
public episode_id? : number;
public opening_crawl? : string;
public planets? : string[];
public producer? : string;
public release_date?:string | Date;
public species?: string[];
public starships?: string[];
public title:string;
public url?:string;
public vehicles?:string[];
}
