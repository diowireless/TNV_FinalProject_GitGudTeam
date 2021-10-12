import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRatingInterface } from '../models/movierating.model';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseURL = 'http://127.0.0.1:8000/api/movie_ratings';

  constructor(private http: HttpClient) { }

  getRating() {
    return this.http.get<MovieRatingInterface>(this.baseURL + '/get');
  }

  addRating(movie_id, user_id, movie_rating) {
    const body = {
      "movie_id": movie_id,
      "user_id": user_id,
      "movie_rating": movie_rating
    }
    return this.http.post<MovieRatingInterface>(this.baseURL + '/post', body)
  }

  editRating(movie_id, user_id, movie_rating) {
    const body = {
      "movie_id": movie_id,
      "user_id": user_id,
      "movie_rating": movie_rating
    }
    return this.http.put<MovieRatingInterface>(this.baseURL + '/put', body)
  }
}
