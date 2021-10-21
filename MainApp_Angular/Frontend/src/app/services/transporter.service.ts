import { Injectable } from '@angular/core';
import { UserData } from '../models/UserData';
import { HeaderComponent } from '../components/header/header.component';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {

  constructor() { }

  userTransported : UserData;
  logged:boolean;
  header:HeaderComponent

  //#Header
  //metodi per le notifiche all'HeaderCOmponent
  notifyToLogin(logged:boolean):void {
    this.header.changeStateOfLogged(logged);
  }

  getHeader(header:HeaderComponent):void {
    this.header = header;
  }
  //#Header END

  //#UserLocalStorage
  //metodi per il local storage dello user
  setUserStorage(userStorage : UserData) {
    const jSonUserStorage = JSON.stringify(userStorage);
    localStorage.setItem('user', jSonUserStorage);
  }

  getUserStorage() {
    this.userTransported = JSON.parse(localStorage.getItem('user'));
  }

  clearUserStorage() {
    localStorage.removeItem('user');
  }
  //#LocalStorageUser END

  //#DecoedPasswordLocalStorage
  //metodi per il local storage della password in chiaro
  setDecodedPasswordLocalStorage(decodedPassword : String) {
    const jSonUserStorage = JSON.stringify(decodedPassword);
    localStorage.setItem('decodedPassword', jSonUserStorage);
  }

  getDecodedPasswordStorage():string {
    return JSON.parse(localStorage.getItem('decodedPassword'));
  }

  clearDecodedPasswordStorage() {
    localStorage.removeItem('Decoded');
  }
  //#DecodedPasswordLocalStorage END



}
