import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  subitem = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.subitem = navParams.get('subitem');
  }

  ionViewDidLoad() {
    console.log(this.subitem);
  }

}
