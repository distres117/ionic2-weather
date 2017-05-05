import { Weather } from './../../providers/weather';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Forecast page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class Forecast {
  forecast = [];
  cityWeather;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private weatherService: Weather
  ) {}
  
  ionViewWillEnter(){
    this.cityWeather = this.navParams.get('cityWeather');
  }
  ionViewDidEnter() {
    this.getForecast(this.cityWeather.id);
  }
  getForecast(id:string){
    this.weatherService.forecast(id,7)
      .subscribe(forecast=>{
         this.forecast = forecast.list;
      });
  }
}
