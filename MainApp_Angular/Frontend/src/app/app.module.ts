import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './routes/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { FilterByGenreComponent } from './routes/filter-by-genre/filter-by-genre.component';
import { GenrePipePipe } from './pipes/genrePipe/genre-pipe.pipe';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';
import { SortByDateComponent } from './routes/sort-by-date/sort-by-date.component';
import { MoviesApiComponent } from './routes/movies-api/movies-api.component';
import { RatingService } from './services/rating.service';
import { MovieRatingComponent } from './routes/movie-rating/movie-rating.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { PageUserComponent } from './routes/page-user/page-user.component';
import { HandleUserComponent } from './routes/handle-user/handle-user.component';
import { MoviesByLocationComponent } from './routes/movies-by-location/movies-by-location.component';
import { PickLocationComponent } from './routes/pick-location/pick-location.component';
import { WatchlistComponent } from './routes/watchlist/watchlist.component';
import { CommentComponent } from './components/comment/comment.component';
import { MoviePageComponent } from './routes/movie-page/movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    DetailsComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginPageComponent,
    LoadingPageComponent,
    FilterByGenreComponent,
    GenrePipePipe,
    WelcomePageComponent,
    SortByDateComponent,
    MoviesApiComponent,
    MovieRatingComponent,
    StarRatingComponent,
    PageUserComponent,
    HandleUserComponent,
    MoviesByLocationComponent,
    PickLocationComponent,
    WatchlistComponent,
    CommentComponent,
    MoviePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
