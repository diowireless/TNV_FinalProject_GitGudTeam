import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { countryApiInterface } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

    private countryCodeURL = 'http://api.geonames.org/countryCodeJSON';

    constructor( private http : HttpClient) { }

    getCountry(lng : number, lat : number) {
      return this.http.get<countryApiInterface>(this.countryCodeURL + "?lat=" + lat + "&lng=" + lng + "&username=g.addari")
    }
}
