import { Component, OnInit } from '@angular/core';
import { TransporterService } from '../../services/transporter.service';
import { UserData } from '../../models/UserData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private transporterService : TransporterService) { }

  logged:boolean;
  user:UserData;

  ngOnInit(): void {
    this.transporterService.getHeader(this);
    this.logged = false;
  }

  cheangeStateOfLogged(logged:boolean) {
    this.logged = logged;
    this.user = this.transporterService.userTransported;
  }

}
