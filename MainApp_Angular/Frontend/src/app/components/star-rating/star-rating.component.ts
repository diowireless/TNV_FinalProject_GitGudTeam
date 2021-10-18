import { Component, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  constructor(private ratingService: RatingService) { }

  rating: number


  ngOnInit(): void {
  }

  updateRating (n: number) {
  this.rating = n
  console.log(this.rating)
  }

  postRating(){
//this.ratingService.addRating().subscribew

  }

}
