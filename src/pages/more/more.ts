import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'

import { ConferencesPage } from '../conferences/conferences';
import { BranchesPage } from '../branches/branches';
import { LeadersPage } from '../leaders/leaders';
import { MinistriesPage } from '../ministries/ministries';
import { ConnectPage } from '../connect/connect';
import { GivingPage } from '../giving/giving';
import { BiblePage } from '../bible/bible';
import { SocialPage } from '../social/social';
import { SeriesPage } from '../series/series';
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  more = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('more').on('value', snapshot => {
      this.more = snapshot.val();
    });
  }

  ionViewDidLoad() {

  }
  
  confernece($event) {
    this.navCtrl.push(ConferencesPage, {});
  }

  branches($event, subitem) {
    this.navCtrl.push(BranchesPage, {subitem: subitem});
  }

  leaders($event, subitem) {
    this.navCtrl.push(LeadersPage, {subitem: subitem});
  }

  ministries($event, subitem) {
    this.navCtrl.push(MinistriesPage, {subitem: subitem});
  }

  connect($event) {
    this.navCtrl.push(ConnectPage, {});
  }

  giving($event, subitem) {
    this.navCtrl.push(GivingPage, {subitem: subitem});
  }

  bible($event) {
    this.navCtrl.push(BiblePage, {});
  }

  social($event, subitem) {
    this.navCtrl.push(SocialPage, {subitem: subitem});
  }

}
