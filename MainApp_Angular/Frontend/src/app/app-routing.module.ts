
import { MovieRatingComponent } from './routes/movie-rating/movie-rating.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './routes/dashboard/dashboard.component'
import { AddComponent } from './routes/add/add.component';
import { DetailsComponent } from './routes/details/details.component';
import { EditComponent } from './routes/edit/edit.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { FilterByGenreComponent } from './routes/filter-by-genre/filter-by-genre.component';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';
import { SortByDateComponent } from './routes/sort-by-date/sort-by-date.component';
import { MoviesApiComponent } from './routes/movies-api/movies-api.component';
import { PageUserComponent } from './routes/page-user/page-user.component';
import { HandleUserComponent } from './routes/handle-user/handle-user.component';
import { MoviesByLocationComponent } from './routes/movies-by-location/movies-by-location.component';
import { PickLocationComponent } from './routes/pick-location/pick-location.component';
import { WatchlistComponent } from './routes/watchlist/watchlist.component';
import { MoviePageComponent } from './routes/movie-page/movie-page.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';


const routes: Routes = [
  { path: "", redirectTo : '/welcome', pathMatch: 'full' },
  { path: "welcome", component: WelcomePageComponent},
  { path: "dashboard", component : DashboardComponent },
  { path: "add", component : AddComponent },
  { path: "details/:id", component : DetailsComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "login", component: LoginPageComponent},
  { path: "filter-by-genre", component: FilterByGenreComponent},
  { path: "sort-by-date", component:SortByDateComponent},
  { path: "movies-api", component: MoviesApiComponent},
  { path: "sign-up", component: PageUserComponent},
  { path: "handle-logged-user", component: HandleUserComponent},
  { path: "movies-by-location", component : MoviesByLocationComponent},
  { path: "pick-location" , component : PickLocationComponent},
  { path: "watchlist" , component : WatchlistComponent},
  { path: "movie-page" , component : MoviePageComponent},
  { path: "about-us", component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
