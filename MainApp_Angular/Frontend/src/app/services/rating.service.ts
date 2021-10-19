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


  getRating() {
   this.http.get<Object>(this.baseURL + '/get').subscribe(
     response => this.ratingData = response["data"]
   );
  }

  addRating(movie_id, user_id, movie_rating) {
    const body = {
      "movie_id": movie_id,
      "user_id": user_id,
      "movie_rating": movie_rating
    }
    return this.http.post<MovieRatingInterface>(this.baseURL + '', body)
  }

  editRating(movie_id, user_id, movie_rating) {
    const body = {
      "movie_id": movie_id,
      "user_id": user_id,
      "movie_rating": movie_rating
    }
    return this.http.put<MovieRatingInterface>(this.baseURL + '', body)
  }

  getMyRating(id: number){
    ///assicurarsi che ratingDAta non sia nul
    return this.ratingData.filter(element => element.user_id === id)
  }
}

///implementare la put
