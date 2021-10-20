import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MinistryDetailsPage } from '../ministry-details/ministry-details';

/**
 * Generated class for the MinistriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ministries',
  templateUrl: 'ministries.html',
})
export class MinistriesPage {

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.subitem = navParams.get('subitem')
  
  }

  ministry($event, subitems) {
    this.navCtrl.push(MinistryDetailsPage, {subitems: subitems});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinistriesPage');
  }

}
