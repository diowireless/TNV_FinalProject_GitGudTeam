import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../../services/moviesapi.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';

@Component({
  selector: 'app-movies-by-location',
  templateUrl: './movies-by-location.component.html',
  styleUrls: ['./movies-by-location.component.css']
})
export class MoviesByLocationComponent implements OnInit {

  // this needs to be done interactively
  location = "Italy";
  regionISO = "IT";
  movies : MovieApiInterface;
  results : ResultInterface[];

  constructor(private apiService:MoviesApiService) { }

  ngOnInit(): void {
    this.getLocationMovieListOnComponent();
  }

  getLocationMovieListOnComponent(){
    this.apiService.getPopularMoviesByLocation(this.regionISO).subscribe(
      response => {
        this.movies = response;
        this.results= this.movies.results;
      },
      error => console.log(error)
    )
  }

}
