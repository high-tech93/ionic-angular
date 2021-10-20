import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { EventDetailsPage } from '../event-details/event-details';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  events = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    firebase.database().ref('events').on('value', snapshot => {
      this.events = snapshot.val();
    });
  }

  ionViewDidLoad() {
    console.log(this.events);
  }

  event($event, item) {
    this.navCtrl.push(EventDetailsPage, {item: item});
  }

}
