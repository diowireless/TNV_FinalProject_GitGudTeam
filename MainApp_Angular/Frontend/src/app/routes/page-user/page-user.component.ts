import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserData } from '../../models/UserData';
import { UserObj } from '../../models/UserObj';
import { Location } from '@angular/common';


@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {



  constructor(private userService:UserService,
              private router: Router,
              private location:Location) { }

  users:UserData[];
  user:UserObj;
  registered:string;
  emailValid:boolean=true;

  message:string = "La email inserita è già registrata su NetFish";

  ngOnInit(): void {
    this.user=new UserObj();
  }


  saveUser() {//invoca il metodo postUser del service UserService
    let userRegistered:UserData;
    this.userService.postUser(this.user).subscribe(register =>{
      userRegistered = register;
      if(userRegistered===null) this.router.navigate(['/login']);
      else {
        this.emailValid=false;
      }
    },
      error=>console.log(error));

  }


  onSubmit() {//invoca il metodo saveUser
      this.saveUser();
  }

  checkForm():boolean {//verifica che il form sia completo richiamato da html
    if(this.user.email==null ||
      this.user.email=="" ||
      this.user.firstName==null ||
      this.user.firstName=="" ||
      this.user.lastName==null ||
      this.user.lastName=="" ||
      this.user.password==null ||
      this.user.password=="" ||
      this.user.username==null ||
      this.user.username=="")
        return false;
    return true;
  }

  //per ritornare alla route precedente
  goBack() {
    this.location.back();
  }

}
