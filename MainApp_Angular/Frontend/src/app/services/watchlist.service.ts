import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WatchlistInterface } from '../models/watchlist.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  baseURL = 'http://localhost:3000/watchlist';

  constructor(private http : HttpClient) { }

  getData () {
    return this.http.get<Array<WatchlistInterface>>(this.baseURL)
  }

  getUserEntries( user_id ) {
    return this.http.get<WatchlistInterface>(this.baseURL + "/" + user_id)
  }

  getEntry( user_id, movie_id ) {
    return this.http.get<WatchlistInterface>(this.baseURL + "/" + user_id + "/" + movie_id)
  }


  addEntry = (data: WatchlistInterface) => {
    return this.http.post<WatchlistInterface>(this.baseURL, {
      "user_id": data.user_id,
      "movie_id": data.movie_id
    });
  };

  deleteEntry( user_id , movie_id ){
    return this.http.delete(this.baseURL + "/" + user_id + "/" + movie_id)
  }


}
