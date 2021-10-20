import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeadersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaders',
  templateUrl: 'leaders.html',
})
export class LeadersPage {

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.subitem = navParams.get('subitem')
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadersPage');
  }

}
