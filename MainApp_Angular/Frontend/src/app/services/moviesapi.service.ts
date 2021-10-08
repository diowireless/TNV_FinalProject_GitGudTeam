import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiInterface } from '../models/apiMovie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

    private baseURL = 'https://api.themoviedb.org/4/';
	// added tmdb API v3 for additional endpoints
    private baseURLv3 = 'https://api.themoviedb.org/3/';
    private apiKey = "f46dab926578b2b055569494fd66a4b0";

    constructor( private http : HttpClient) { }

    getMarvelList(){
        return this.http.get<MovieApiInterface>(this.baseURL+"list/1?api_key="+this.apiKey);
    }

}
