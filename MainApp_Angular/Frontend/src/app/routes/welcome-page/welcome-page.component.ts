import { Component, OnInit } from '@angular/core';
import { TransporterService } from '../../services/transporter.service';
import { UserData } from '../../models/UserData';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  user : UserData;

  constructor(private transporterService : TransporterService,
              private router : Router) { }

  ngOnInit(): void {
    this.user = this.transporterService.userTransported;
  }

  gotoMainPage() {
    if(this.user)
      this.router.navigate(['/pick-location'])
    else
      this.router.navigate(['/login'])
  }

}
