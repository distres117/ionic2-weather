import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Add page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  data = {city:'New York', country: 0};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public view: ViewController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Add');
  }
  dismiss(){
    this.view.dismiss(this.data);
  }

}
