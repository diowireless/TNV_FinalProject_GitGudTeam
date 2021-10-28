import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../../services/moviesapi.service';
import { ResultInterface } from '../../models/apiMovie.model';
import { ActivatedRoute } from '@angular/router';
import { CommentApiInterface } from '../../models/apiComment.model';
import { CommentsapiService } from '../../services/commentsapi.service';
import { UserData } from '../../models/UserData';
import { TransporterService } from 'src/app/services/transporter.service';
import { FormGroup } from '@angular/forms';
import { map } from 'leaflet';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  user : UserData;
  results : ResultInterface;
  comments : CommentApiInterface[];
  movie_id : number;
  genres : string;
  newComment: FormGroup;
  userMap : Map<number, string>;

  constructor(private route: ActivatedRoute,
              private transporterService:TransporterService,
              private movieApiService : MoviesApiService,
              private commentApiService : CommentsapiService,
              private userService : UserService) { }

  ngOnInit(): void {
    this.user = this.transporterService.userTransported;
    this.userMap = new Map();
    this.getMovieId();
  }

  getMovieId() {
    this.route.queryParams.subscribe(params => {
      this.movie_id = params['movie'];
      this.loadMovieById();
    });
  }

  loadMovieById() {
    this.movieApiService.getMovieById(this.movie_id).subscribe( response => {
      this.results = response;
      this.joinGenres();
      this.loadMovieComments();
    } ,
    error => console.log(error)
    )
  }

  loadMovieComments() {
    this.commentApiService.getCommentsByMovieId(this.movie_id).subscribe( response => {
      this.comments = response;
      this.comments.forEach(element => {
        if(!this.userMap.has(element.userId))
          this.findUsernameById(element.userId);
      })
    })
  }

  joinGenres() {
    this.genres = this.results.genres.map(e => e.name).join(', ');
  }

  onSubmit(form) {
    let newComment : CommentApiInterface = {userId : this.user.id, movieId : this.movie_id, body : form.form.value.newComment};
    console.log("Body: " + newComment.body);
    console.log(form.form.value)
    this.commentApiService.postComment(newComment).subscribe( response => {
      console.log(response);
      window.location.reload();
    } ,
    error => console.log(error)
    )
  }

  findUsernameById(id) {
    this.userService.getUsernameById(id).subscribe( response => {
      this.userMap.set(response.id, response.username);
    },
    error => console.log(error)
    )
  }

  removeComment(commentId) {
    this.commentApiService.deleteComment(commentId).subscribe( response => {
      console.log(response);
      window.location.reload();
    } ,
    error => console.log(error)
    )
  }

}
