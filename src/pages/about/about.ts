import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  about = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ) {
      firebase.database().ref('about').on('value', snapshot => {
        this.about = snapshot.val();
      });

  }

  ionViewDidLoad() {
    console.log(this.about);
  }


}
