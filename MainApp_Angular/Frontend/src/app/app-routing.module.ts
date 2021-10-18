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


const routes: Routes = [
  { path: "", redirectTo : '/welcome', pathMatch: 'full' },
  { path: "welcome", component: WelcomePageComponent},
  { path: "dashboard", component : DashboardComponent },
  { path: "add", component : AddComponent },
  { path: "details/:id", component : DetailsComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "login", component: LoginPageComponent},
  { path: "filterByGenre", component: FilterByGenreComponent},
  { path: "sortByDate", component:SortByDateComponent},
  { path: "moviesApi", component: MoviesApiComponent},
  { path: "signUp", component: PageUserComponent},
  { path: "HandleLogggedUser", component: HandleUserComponent}
  { path: "moviesByLocation", component : MoviesByLocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
