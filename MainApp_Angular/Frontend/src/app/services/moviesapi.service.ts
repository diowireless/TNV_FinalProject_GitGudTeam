import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiInterface, ResultInterface } from '../models/apiMovie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

    private baseURLv4 = 'https://api.themoviedb.org/4/';
	// added tmdb API v3 for additional endpoints
    private baseURL = 'https://api.themoviedb.org/3/';
    private apiKey = "f46dab926578b2b055569494fd66a4b0";

    constructor( private http : HttpClient) { }

    getMarvelList(){
        return this.http.get<MovieApiInterface>(this.baseURLv4+"list/1?api_key="+this.apiKey);
    }

    getPopularMoviesByLocation(regionISO) {
        return this.http.get<MovieApiInterface>(this.baseURL+"discover/movie?api_key="+this.apiKey
        +"&region="+regionISO+"&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");
    }

    getMovieById(id) {
      return this.http.get<ResultInterface>(this.baseURL+"movie/"+id+"?api_key="+this.apiKey);
    }

}
