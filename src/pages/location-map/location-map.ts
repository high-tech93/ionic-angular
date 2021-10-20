import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

declare var google;
/**
 * Generated class for the LocationMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location-map',
  templateUrl: 'location-map.html',
})
export class LocationMapPage {

  @ViewChild('map2') mapElement: ElementRef;

  map: any;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  // Property used for Firebase database link
  subitems = [];

  private convertStringToNumber(value: string): number {
    return +value;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  
    this.subitems = navParams.get('subitems')
  
  }
  
  ionViewDidLoad(){
    this.initMap();
  }

  initMap()
  {
    let latLng = new google.maps.LatLng(this.convertStringToNumber(this.subitems['map_lat']), this.convertStringToNumber(this.subitems['map_lng']));

    let mapOptions = {
      center: latLng,
      zoom: this.convertStringToNumber(this.subitems['map_zoom']),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    // this.map = new google.maps.Map(document.getElementById('map2'), mapOptions);
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  
  closeModal() {
    this.viewCtrl.dismiss();
  }

}
