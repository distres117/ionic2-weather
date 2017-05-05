import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the Weather provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Weather {
  private apiKey = 'dedea2ca5d29020c50a20a8471cdfabb';
  private baseUrl = 'http://api.openweathermap.org/data/2.5'

  constructor(public http: Http) {}

  byCity(city:string, country:string){
    return this.http.get(`${this.baseUrl}/weather?q=${city},${country}&APPID=${this.apiKey}`)
      .map(res=>res.json());
  }

  forecast(cityId:string, days: number){
    return this.http.get(`${this.baseUrl}/forecast/daily?id=${cityId}&cnt=${days}&APPID=${this.apiKey}`)
      .map(res=>res.json());
  }
}
