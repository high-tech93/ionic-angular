import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'
/**
 * Generated class for the BiblePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html',
})
export class BiblePage {

  myUrl: String = "";
  bible = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    firebase.database().ref('more/bible').on('value', snapshot => {
      this.bible = snapshot.val();
    });
  }

  ionViewDidLoad() {
    this.myUrl = this.bible[0]['BibleURL'];
    console.log(this.bible);
  }

}
