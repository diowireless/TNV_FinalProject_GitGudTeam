import { Injectable } from '@angular/core';
import { UserData } from '../models/UserData';
import { HeaderComponent } from '../components/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {

  constructor() { }

  userTransported : UserData;
  logged:boolean;
  header:HeaderComponent

  notifyToLogin(logged:boolean):void {
    this.header.cheangeStateOfLogged(logged);
  }

  getHeader(header:HeaderComponent):void {
    this.header = header
  }

}
