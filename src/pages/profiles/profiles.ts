import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { ProfileArticlePage } from '../profile-article/profile-article';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {

  profiles = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    firebase.database().ref('profiles').on('value', snapshot => {
      this.profiles = snapshot.val();
    });
  }

  ionViewDidLoad() {
    console.log(this.profiles);
  }

  profileArticle($event, item) {
    this.navCtrl.push(ProfileArticlePage, {item: item});
  }

}
