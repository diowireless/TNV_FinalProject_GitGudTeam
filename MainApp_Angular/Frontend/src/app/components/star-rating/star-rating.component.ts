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
    this.currentRating = this.ratingService.getMyRating(this.user.id).find(element => element.movie_id === this.movie_id)
    if (this.currentRating){
      this.rating= this.currentRating.movie_rating
    }
  }

  updateRating(n: number) {
    this.rating = n
    console.log(this.rating)
    this.postRating()
  }

  postRating() {
    if (!this.user.id) {
      alert("SignUp to vote!")
      return
    }
    if(this.currentRating){
      this.ratingService.editRating(this.movie_id, this.user.id, this.rating).subscribe(
        response => {
          console.log(response)
          alert("Update rating state: Success!")
        }, error => {
          console.log(error)
          alert("Update rating state: Failed!")
        })
    }else{
      this.ratingService.addRating(this.movie_id, this.user.id, this.rating).subscribe(
        response => {
          console.log(response)
          alert("Thanks for your vote!")
        }, error => {
          console.log(error)
          alert("Error - Try Again!")
        })
    }

  }
}
