import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiInterface, ResultInterface } from 'src/app/models/apiMovie.model';
import { MovieData } from 'src/app/models/data.model';
import { UserData } from 'src/app/models/UserData';
import { WatchlistInterface } from 'src/app/models/watchlist.model';
import { DataService } from 'src/app/services/data.service';
import { MoviesApiService } from 'src/app/services/moviesapi.service';
import { TransporterService } from 'src/app/services/transporter.service';
import { WatchlistService } from '../../services/watchlist.service';
import { CommentsapiService } from '../../services/commentsapi.service';
import { CommentApiInterface } from 'src/app/models/apiComment.model';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  private user:UserData;

  movie : ResultInterface;
  results : ResultInterface[];
  watchlist : WatchlistInterface[];
  moviesDataLoader=false;


  constructor(private watchlistService: WatchlistService,
              private router : Router,
              private transporterService:TransporterService,
              private movieApiService:MoviesApiService) { }


  ngOnInit(): void {
    this.user = this.transporterService.userTransported;
    this.results = [];
    this.getEntries()
  }

  getEntries(){
    this.watchlistService.getUserEntries(this.user.id).subscribe( (response : any) => {
      this.watchlist = response;

      for(let element of this.watchlist) {
        this.loadMovieById(element.movie_id);
      };
    },
    error => console.log(error)
    )
  }

  loadMovieById(id) {
    this.movieApiService.getMovieById(id).subscribe( response => {
      this.results.push(response);
    } ,
    error => console.log(error)
    )
  }

  gotoMoviePage(id) {
    this.router.navigate(['/movie-page'], {queryParams: {movie : id}});
  }

}
