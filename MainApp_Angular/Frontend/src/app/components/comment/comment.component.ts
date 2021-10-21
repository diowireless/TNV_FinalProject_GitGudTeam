import { Component, Input, OnInit } from '@angular/core';
import { CommentApiInterface } from '../../models/apiComment.model';
import { CommentsapiService } from '../../services/commentsapi.service';
import { UserData } from '../../models/UserData';
import { TransporterService } from '../../services/transporter.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  private user:UserData;
  comment : CommentApiInterface;
  @Input("movie_id") movie_id : number;

  constructor(private commentsApiService : CommentsapiService,
              private transporterService:TransporterService) { }

  ngOnInit(): void {
    this.user = this.transporterService.userTransported;
    this.comment = null;
    this.loadCommentById(this.movie_id)
  }

  loadCommentById(movie_id) {
      this.commentsApiService.getCommentsByUserAndMovieId(this.user.id, movie_id).subscribe( response => {
        if(response[0]) {
          this.comment = response;
          console.log("Comment for movie: "+movie_id)
          console.log(this.comment);
        }
    } ,
    error => console.log(error)
    )
  }

  deleteCommentById() {
    this.commentsApiService.getCommentsByUserAndMovieId(this.user.id, this.movie_id).subscribe( response => {
      let id = response.id;
      this.commentsApiService.deleteComment(id).subscribe( response => {
        console.log(response);
      } ,
      error => console.log(error)
      )
    } ,
    error => console.log(error)
    )
  }

  addNewComment(body) {
    let newComment : CommentApiInterface = {userId : this.user.id, movieId : this.movie_id, body : body};
    this.commentsApiService.postComment(newComment).subscribe( response => {
      console.log(response);
    } ,
    error => console.log(error)
    )
  }

  updateComment(body) {
    let newComment : CommentApiInterface = {userId : this.user.id, movieId : this.movie_id, body : body}

    this.commentsApiService.getCommentsByUserAndMovieId(this.user.id, this.movie_id).subscribe( response => {
      let id = response.id;
      this.commentsApiService.updateComment(id, newComment).subscribe( response => {
        console.log(response);
      } ,
      error => console.log(error)
      )
    } ,
    error => console.log(error)
    )
  }
}
