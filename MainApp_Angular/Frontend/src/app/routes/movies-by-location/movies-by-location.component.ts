import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApiService } from '../../services/moviesapi.service';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';
import { CountryApiInterface } from '../../models/country.model';
import { CountryApiService } from '../../services/countryapi.service';
import { WatchlistService } from '../../services/watchlist.service';
import { unescapeIdentifier } from '@angular/compiler';
import { UserData } from '../../models/UserData';
import { TransporterService } from 'src/app/services/transporter.service';

@Component({
  selector: 'app-movies-by-location',
  templateUrl: './movies-by-location.component.html',
  styleUrls: ['./movies-by-location.component.css']
})
export class MoviesByLocationComponent implements OnInit {

  // this needs to be done interactively

  lng : number;
  lat : number;
  user : UserData;
  country : CountryApiInterface;
  movies : MovieApiInterface;
  results : ResultInterface[];

  constructor(private route: ActivatedRoute,
              private movieApiService:MoviesApiService,
              private countryApiService : CountryApiService,
              private WatchlistService : WatchlistService,
              private transporterService : TransporterService) { }

  ngOnInit(): void {
    this.user = this.transporterService.userTransported;
    this.getLocationMovieListOnComponent();
  }

  getLocationMovieListOnComponent() {
    this.route.queryParams.subscribe(params => {
      this.lng = params['lng'];
      this.lat = params['lat'];
      this.findGeoData();
    });
  }

  findGeoData() {
    this.countryApiService.getCountry(this.lng, this.lat).subscribe (
      response => {
        this.country = response;
        console.log(this.country)
        this.findMoviesByCountry();
      },
      error => console.log(error)
    )
  }

  findMoviesByCountry() {
    this.movieApiService.getPopularMoviesByLocation(this.country.countryCode).subscribe(
      response => {
        this.movies = response;
        this.results = this.movies.results;
      },
      error => console.log(error)
    )
  }

  addToWatchlist(movieId) {
    this.WatchlistService.addEntry({user_id: this.user.id, movie_id: movieId}).subscribe(
      response => {
        console.log(response);
        window.alert("Movie correctly added to your watchlist");
      },
      error => window.alert("Movie already in watchlist")
    );
  }

}
