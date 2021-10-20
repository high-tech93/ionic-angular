import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
/**
 * Generated class for the GivingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare var paypal: any;
@IonicPage()
@Component({
  selector: 'page-giving',
  templateUrl: 'giving.html',
})
export class GivingPage {

  subitem = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alert: AlertController,
    public modalCtrl: ModalController,
    
    ) {
    this.subitem = navParams.get('subitem')
  }

  ionViewDidLoad() {
    console.log(this.subitem['paypal_client_ID']);
  }

    // modal controller configuration for payment
  payment($event, subitems) {
    let modal = this.modalCtrl.create(PaymentPage, {subitems: subitems});
    modal.present();
  }
  

}
