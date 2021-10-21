import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from '../../services/rating.service';
import { MovieRatingInterface } from '../../models/movierating.model';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.css']
})
export class AverageRatingComponent implements OnInit {

  movie_ratings : MovieRatingInterface[];
  avg_rating : number;
  @Input("movie_id") movie_id: number

  constructor(private ratingService : RatingService) { }

  ngOnInit(): void {
    this.avg_rating = 0;
    this.ratingService.getByMovieId(this.movie_id).subscribe(
      response => {
        this.movie_ratings = response["data"];
        console.log(this.movie_ratings);
        this.movie_ratings.forEach(element => {
          this.avg_rating += element.movie_rating;
        });
        this.avg_rating /= this.movie_ratings.length;
      }
    )
  }

}
