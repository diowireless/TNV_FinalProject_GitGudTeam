import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';
import { TransporterService } from 'src/app/services/transporter.service';
import { UserData } from '../../models/UserData';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  constructor(private ratingService: RatingService, private transporterService : TransporterService) { }

  user: UserData

  rating: number
@Input("movie_id") movie_id : number

  ngOnInit(): void {
    this.user = this.transporterService.userTransported
  }

  updateRating (n: number) {
  this.rating = n
  console.log(this.rating)
  this.postRating()
  }

  postRating(){
   if(!this.user.id){
     alert("Per votare è necessario effettuare il LogIn!")
     return
   }
    this.ratingService.addRating(this.movie_id, this.user.id, this.rating).subscribe(
      response => {console.log(response)
        alert("Voto inviato con successo!")
    }, error => {
        console.log(error)
        alert("Voto non inviato correttamente!")
    }

  )

  }

}
