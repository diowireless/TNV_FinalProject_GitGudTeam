import { Component, OnInit } from '@angular/core';
import { TransporterService } from '../../services/transporter.service';
import { UserData } from '../../models/UserData';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-handle-user',
  templateUrl: './handle-user.component.html',
  styleUrls: ['./handle-user.component.css']
})
export class HandleUserComponent implements OnInit {

  constructor(private transporterService : TransporterService,
              private location : Location,
              private router : Router,
              private userService : UserService) { }

  user : UserData;
  message : string = "Compilare tutti i campi";
  success :string = "Modifiche al profilo eseguite.";
  fail : string = "La nuova Mail inserita è già presente nel database";
  deleteMessage : string;
  fakePassword = "";
  emailValid : boolean;
  updatesuccess : boolean;
  updatefail :boolean;

  ngOnInit(): void {
    this.updatefail = false;
    this.updatesuccess = false;
    this.emailValid = true;
    this.user = this.transporterService.userTransported;
    this.user.password = this.transporterService.getDecodedPasswordStorage();
  }

  onSubmit() {
    this.updatefail = false;
    this.updatesuccess = false;
    let userupdated:UserData;
    this.transporterService.setDecodedPasswordLocalStorage(this.user.password);
    this.userService.updateUser(this.user).subscribe(
      result =>{
        userupdated = result;
        if(userupdated!= null) {
          this.user = userupdated;
          this.user.password =  this.user.password = this.transporterService.getDecodedPasswordStorage();
          this.updatesuccess = true;

        }
        else {
          this.updatefail = true;
        }
      },
      error => console.log(error)
    );
  }

  checkForm():boolean {//verifica che il form sia completo richiamato da html
    if(this.user.email==null ||
      this.user.email=="" ||
      this.user.firstName==null ||
      this.user.firstName=="" ||
      this.user.lastName==null ||
      this.user.lastName=="" ||
      this.user.username==null ||
      this.user.username=="")
        return false;
    return true;
  }

  goBack() {
    this.location.back();
  }


  logOut() {
    this.transporterService.userTransported = null;
    this.transporterService.clearUserStorage();
    this.transporterService.clearDecodedPasswordStorage();
    this.transporterService.notifyToLogin(false);
    this.router.navigate(['/welcome']);
  }

  unsuscribe() {
    this.userService.deleteUser(this.user).subscribe(result => {
      if(result) {
        window.alert("Unsuscribe success, Good Bye!!");
        this.transporterService.notifyToLogin(false);
        this.router.navigate(['/welcome']);
      }
      else
        window.alert("Unsuscribe fallita");
    },
    error => console.log(error)
    )
  }

}
