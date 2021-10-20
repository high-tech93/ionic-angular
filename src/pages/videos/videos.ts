import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'
import {DomSanitizer} from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html'
})
export class VideosPage {

  music: string = "videos";

  item = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sanitizer:DomSanitizer
    ) {

    firebase.database().ref('videos').on('value', snapshot => {
      this.item = snapshot.val();
    });
  }

  ionViewDidLoad() {
    console.log(this.item);
  }

}
