import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EpisodePage } from '../episode/episode';

/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

  subitem = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subitem = navParams.get('item')
  }

  ionViewDidLoad() {
    console.log(this.subitem);
  }

  episodes($event, subitem) {
    this.navCtrl.push(EpisodePage, {subitem: subitem});
  }

}
