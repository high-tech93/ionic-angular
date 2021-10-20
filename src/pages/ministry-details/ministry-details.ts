import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MinistryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ministry-details',
  templateUrl: 'ministry-details.html',
})
export class MinistryDetailsPage {

  subitems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.subitems = navParams.get('subitems')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistryDetailsPage');
  }

}
