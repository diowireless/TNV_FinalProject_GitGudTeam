import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { countryApiInterface } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

    private baseURL = 'https://restcountries.com/v3.1/name/';

    constructor( private http : HttpClient) { }

    getCountryISO(region : string) {
        return this.http.get<countryApiInterface>(this.baseURL+region+"?fullText=true");
    }
}
