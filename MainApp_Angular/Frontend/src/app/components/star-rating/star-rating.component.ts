import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  constructor() { }

  rating: number

  ngOnInit(): void {
  }

  updateRating (n: number) {
  this.rating = n
  console.log(this.rating)
  }
}
