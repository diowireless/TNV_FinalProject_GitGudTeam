import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MovieApiInterface, ResultInterface } from '../../models/apiMovie.model';
import { UserData } from '../../models/UserData';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  users:UserData[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserListOnComponent();
  }

  getUserListOnComponent(){
    this.userService.getUserList().subscribe(
      data => {
        //se è andato tutto bene, allora:
        this.users = data;
        console.log("ho ottenuto i dati!");
        console.log(this.users);
      },
      error => console.log(error)
    );

  }

}
