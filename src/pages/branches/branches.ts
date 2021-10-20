import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LocationMapPage } from '../location-map/location-map';
/**
 * Generated class for the BranchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-branches',
  templateUrl: 'branches.html',
})
export class BranchesPage {

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  
    this.subitem = navParams.get('subitem')
  
  }

  // modal controller configuration for location maps
  locationMap($event, subitems) {
    let modal = this.modalCtrl.create(LocationMapPage, {subitems: subitems});
    modal.present();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BranchesPage');
  }

}
