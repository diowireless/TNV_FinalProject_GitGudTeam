import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRatingInterface } from '../models/movierating.model';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

    private baseURL = 'http://127.0.0.1:8000/api/movie_ratings';

    constructor( private http : HttpClient) { }

    getRating(){
      return this.http.get<MovieRatingInterface>(this.baseURL);
  }
}
