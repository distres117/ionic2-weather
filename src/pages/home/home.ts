import { Forecast } from './../forecast/forecast';
import { Weather } from './../../providers/weather';
import { AddPage } from './../add/add';
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weatherList = [];
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private weatherService:Weather
  ) {}

  addWeather(){
    let addWeatherModal = this.modalCtrl.create(AddPage);
    addWeatherModal.onDidDismiss(data=>{
      if (data){
        this.getWeather(data.city, data.country);
      }
    });
    addWeatherModal.present();
  }

  getWeather(city:string, country:string){
    //get weather from api
    this.weatherService.byCity(city,country)
      .subscribe(weather=>{
        this.weatherList.push(weather);
      },
      err=>console.log(err),
      ()=>console.log('got weather from service'));
  }
  viewForecast(cityWeather:Object){
    this.navCtrl.push(Forecast, {cityWeather});
  }

}
