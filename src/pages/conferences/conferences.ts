import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeriesPage } from '../series/series';
import firebase from 'firebase'
/**
 * Generated class for the ConferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conferences',
  templateUrl: 'conferences.html',
})
export class ConferencesPage {

  conferences = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    firebase.database().ref('more/conferences').on('value', snapshot => {
      this.conferences = snapshot.val();
    });
  
  }

  series($event, subitems) {
    this.navCtrl.push(SeriesPage, {item: subitems});
  }

  ionViewDidLoad() {
    console.log(this.conferences);
  }

}
