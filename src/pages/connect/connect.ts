import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'
/**
 * Generated class for the ConnectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {

  connect = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    firebase.database().ref('more/connect').on('value', snapshot => {
      this.connect = snapshot.val();
    });
  
  }

  ionViewDidLoad() {
    // firebase.database().ref('more/connect').on('value', snapshot => {
    //   this.connect = snapshot.val();
    // });
    console.log(this.connect);
  }

}
