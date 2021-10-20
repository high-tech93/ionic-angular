import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EpisodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html',
})
export class EpisodePage {

  subitem = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subitem = this.navParams.get('subitem');
  }

  ionViewDidLoad() {
    console.log(this.subitem);
  }

}
