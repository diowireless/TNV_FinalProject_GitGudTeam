import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRatingInterface } from '../models/movierating.model';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseURL = 'http://127.0.0.1:8000/api/movie_ratings';

  constructor(private http: HttpClient) { }

  public ratingData : MovieRatingInterface []


  getAll() {
    return this.http.get<Object>(this.baseURL);
  }

  addRating(movie_id, user_id, movie_rating) {
    const body = {
      "movie_id": movie_id,
      "user_id": user_id,
      "movie_rating": movie_rating
    }
    return this.http.post<MovieRatingInterface>(this.baseURL + '', body)
  }

  editRating(rating_id, movie_id, user_id, movie_rating) {
    const body = {
      "movie_id": movie_id,
      "user_id": user_id,
      "movie_rating": movie_rating
    }
    return this.http.put<MovieRatingInterface>(this.baseURL + '/' + rating_id, body)
  }

  getByMovieId(movie_id) {
    return this.http.get<Object>(this.baseURL + '/movie_id/' + movie_id);
  }

  getRatingByUserAndMovieId(user_id : number, movie_id : number) {
    return this.http.get<MovieRatingInterface>(this.baseURL + '/movie_id/' + movie_id + '/user_id/' + user_id);
  }
}


