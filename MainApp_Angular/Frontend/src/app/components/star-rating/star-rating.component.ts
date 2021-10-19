import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  constructor(private ratingService: RatingService) { }

  rating: number
@Input("movie_id") movie_id : number
@Input("user_id") user_id : number  // Gianfranco mi devi esporre l' id dell' utente quando si logga perche cosi lo associo qui

  ngOnInit(): void {
  }

  updateRating (n: number) {
  this.rating = n
  console.log(this.rating)
  this.postRating()
  }

  postRating(){
   if(!this.user_id){
     alert("Per votare è necessario effettuare il LogIn!")
     return
   }
    this.ratingService.addRating(this.movie_id, this.user_id, this.rating).subscribe(
      response => {console.log(response)
        alert("Voto inviato con successo!")
    }, error => {
        console.log(error)
        alert("Voto non inviato correttamente!")
    }

  )

  }

}
