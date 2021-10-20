import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentApiInterface } from '../models/apiComment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsapiService {

  private baseURL = 'http://localhost:26737/comments';

  constructor( private http : HttpClient) { }

  // get call for all comments
  getAllComments() {
    return this.http.get<CommentApiInterface>(this.baseURL);
  }
  // get call for all comments of a movie
  getCommentsByMovieId(movie_id) {
    return this.http.get<CommentApiInterface>(this.baseURL+"?movie-id="+movie_id);
  }
  // get call for all comments of a user
  getCommentsByUserId(user_id) {
    return this.http.get<CommentApiInterface>(this.baseURL+"?user-id="+user_id);
  }
  // get call for comment of a movie by a specific user
  getCommentsByUserAndMovieId(user_id, movie_id) {
    return this.http.get<CommentApiInterface>(this.baseURL+"?user-id="+user_id+"&movie-id="+movie_id);
  }
  // post call to add a new comment
  postComment(data: CommentApiInterface) {
    return this.http.post<CommentApiInterface>(this.baseURL, {
      "userId": data.userId,
      "movieId": data.movieId,
      "body": data.body
    });
  }
  // delete call to remove a comment
  deleteComment(id) {
    return this.http.delete(this.baseURL + "/" + id);
  }
  // update call to change a comment
  updateComment(id, data: CommentApiInterface) {
    return this.http.put<CommentApiInterface>(this.baseURL + "/" + id, {
      "userId": data.userId,
      "movieId": data.movieId,
      "body": data.body
    })
  }
}
