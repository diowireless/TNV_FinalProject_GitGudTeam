import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';
import { TransporterService } from 'src/app/services/transporter.service';
import { UserData } from '../../models/UserData';
import { MovieApiInterface } from '../../models/apiMovie.model';
import { MovieRatingInterface } from '../../models/movierating.model';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  constructor(private ratingService: RatingService, private transporterService: TransporterService) { }

  user: UserData
  currentRating: MovieRatingInterface

  rating: number
  @Input("movie_id") movie_id: number

  ngOnInit(): void {
    this.user = this.transporterService.userTransported

    this.ratingService.getRatingByUserAndMovieId(this.user.id, this.movie_id).subscribe(
      response => {
        this.currentRating = response["data"][0];
        this.rating= this.currentRating.movie_rating
      }
    )
  }

  updateRating(n: number) {
    this.rating = n
    console.log(this.rating)
    this.postRating()
  }

  postRating() {
    if (!this.user.id) {
      alert("Please login to rate this movie!")
      return
    }
    if(this.currentRating){
      console.log(this.currentRating);
      console.log("id: "+ this.currentRating.id + "movie: "+this.movie_id+" - user: "+this.user.id + " rating: "+this.rating)
      this.ratingService.editRating(this.currentRating.id, this.movie_id, this.user.id, this.rating).subscribe(
        response => {
          console.log(response)
          alert("Rating successfully modified!")
        }, error => {
          console.log(error)
          alert("Couldn't edit the rating!")
        })
    }else{
      this.ratingService.addRating(this.movie_id, this.user.id, this.rating).subscribe(
        response => {
          console.log(response)
          alert("Rating correctly stored!")
        }, error => {
          console.log(error)
          alert("Couldn't store the rating!")
        })
    }

  }
}
