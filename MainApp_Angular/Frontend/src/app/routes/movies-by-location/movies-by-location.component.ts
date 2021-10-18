import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApiService } from '../../services/moviesapi.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';
import { countryApiInterface } from '../../models/country.model';
import { CountryApiService } from '../../services/countryapi.service';

@Component({
  selector: 'app-movies-by-location',
  templateUrl: './movies-by-location.component.html',
  styleUrls: ['./movies-by-location.component.css']
})
export class MoviesByLocationComponent implements OnInit {

  // this needs to be done interactively
  location;
  regionISO;
  country : countryApiInterface;
  movies : MovieApiInterface;
  results : ResultInterface[];

  constructor(private route: ActivatedRoute, private movieApiService:MoviesApiService, private countryApiService : CountryApiService) { }

  ngOnInit(): void {
    this.location = this.route.snapshot.params['region'];
    this.getCountryISOOnComponent();
  }

  getCountryISOOnComponent(){
    this.countryApiService.getCountryISO(this.location).subscribe(
      response => {
        console.log(response[0])
        this.country = response[0];
        this.regionISO = this.country.cca2;
        console.log(this.regionISO)
        this.getLocationMovieListOnComponent();
      },
      error => console.log(error)
    )
  }

  getLocationMovieListOnComponent(){
    this.movieApiService.getPopularMoviesByLocation(this.regionISO).subscribe(
      response => {
        this.movies = response;
        this.results= this.movies.results;
      },
      error => console.log(error)
    )
  }

}
