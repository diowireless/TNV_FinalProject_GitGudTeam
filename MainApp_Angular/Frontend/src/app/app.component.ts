import { Component } from '@angular/core';
import { RatingService } from './services/rating.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ratingService: RatingService){
 this.ratingService.getRating();
}

  title = 'frontend';
}
