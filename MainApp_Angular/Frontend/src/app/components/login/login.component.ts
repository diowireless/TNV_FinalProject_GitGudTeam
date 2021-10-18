import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserData } from 'src/app/models/UserData';
import { Observable } from 'rxjs';
import { TransporterService } from '../../services/transporter.service';

export interface UserInterface{
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private userService:UserService,
    private transporterService:TransporterService) { }

  //variabili per l'input
  emailInput: string;
  passwordInput: string;
  datiValidi:boolean;
  user:UserData;



  ngOnInit(): void {
    this.transporterService.logged = false;
  }

  submitButton(){
    if(this.emailInput != null && this.passwordInput !=null){
      console.log("submitButton");
      this.checkLogin(this.emailInput, this.passwordInput).subscribe(resultUser =>{
        this.user = resultUser
        console.log(this.user);
        if(this.user!=null) {
          this.transporterService.userTransported = this.user;//trasporta l'oggetto user nel componente
                                                              //di destinazione
          this.transporterService.notifyToLogin(true)//tramite questo metodo di service viene modificat
                                                      //lo stato dellla proprietà logged in HeaderComponent.
          this.router.navigate(['/dashboard']);//destinazione
        }
        else
          this.datiValidi = false;
      },
      error =>console.error(error)
      );

    }
  }

  checkLogin(email: string, password: string):Observable<UserData> {
    console.log("checkLogin");
    return this.userService.loginUser(email, password);
  }

}
