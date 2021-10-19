import { MovieRatingInterface } from './../../models/movierating.model';
import { Component, OnInit } from '@angular/core';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css']
})
export class MovieRatingComponent implements OnInit {

  rating: MovieRatingInterface [] = [];

  constructor(private ratingservice: RatingService) { }

  ngOnInit(): void {
  }





}
