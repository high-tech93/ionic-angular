import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  @ViewChild('map') mapElement: ElementRef;

  map: any;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  item = [];

  private convertStringToNumber(value: string): number {
    return +value;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) {

    this.item = navParams.get('item');

    this.item['startDate'] = new Date(this.item['startDate']);
    this.item['endDate'] = new Date(this.item['endDate']);

  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap()
  {
    let latLng = new google.maps.LatLng(this.convertStringToNumber(this.item['map_lat']), this.convertStringToNumber(this.item['map_lng']));

    let mapOptions = {
      center: latLng,
      zoom: this.convertStringToNumber(this.item['map_zoom']),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  createEvent() {
    this.calendar.createEventInteractively(
      this.item['title'],
      this.item['eventLocation'],
      this.item['notes'],
      this.item['startDate'],
      this.item['endDate']
    ).
      then(() => {
      console.log('Event Created!');
    })
      .catch((err) => {
      console.log('Oops, something went wrong:', err);
    });
  }

}
