import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Router } from '@angular/router';
import { MovieData } from '../../models/data.model';
import { UserData } from '../../models/UserData';
import { TransporterService } from '../../services/transporter.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user:UserData;
  public movies: MovieData [];
  moviesDataLoader=false;


  constructor(private dataService: DataService,
              private router : Router,
              private transporterService:TransporterService) { }


  ngOnInit(): void {
    this.user = this.transporterService.userTransported;
    console.log("dashboard user:" + this.user.firstName+" "+this.user.lastName+" id n."+this.user.id);
    this.getEntries()
  }


  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.movies = response;
      this.moviesDataLoader=true;

    })
  }

  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }



}
