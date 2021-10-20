import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  subitem: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public payPal: PayPal, public viewCtrl: ViewController) {
    this.subitem = navParams.get('subitems')
  }

	payment: PayPalPayment = new PayPalPayment('2.99', 'USD', 'Giving', 'sale');
	currencies = ['EUR', 'USD'];

  ionViewDidLoad() {
    console.log(this.subitem);
  }
  makePayment() {
    if (this.subitem == "" || this.subitem == null ) {
      alert('Please contact Administrator.');
    } else {
      this.payPal.init({
        PayPalEnvironmentProduction: this.subitem,
        PayPalEnvironmentSandbox: "Ae2OQuYzllKKMzjOUJYJjjbd3nZv7J9DM-rpDGOGtYdabHxAWEfuSavc_QtT5tNtxR1iTVtcpqp4nQsN"
      }).then(() => {
        // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
          // Only needed if you get an "Internal Service Error" after PayPal login!
          payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        })).then(() => {
          // let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
          this.payPal.renderSinglePaymentUI(this.payment).then((res) => {
            this.closeModal();
            alert('Successfully paid');
          }, () => {
            alert('You have cancelled the payment.');
          });
        }, () => {
          // Error in configuration
          alert('Something went wrong, try again later.');
        });
      }, () => {
        // Error in initialization, maybe PayPal isn't supported or something else
        // alert('Maybe PayPal is not supported or something else.');
      }
      
      );
    }
      
  }

    // payButtonHandler() {
  //   console.log(paypal);
  //   paypal.Buttons({
  //     env: 'sandbox',
  //     client: {
  //       sandbox: 'Ae2OQuYzllKKMzjOUJYJjjbd3nZv7J9DM-rpDGOGtYdabHxAWEfuSavc_QtT5tNtxR1iTVtcpqp4nQsN',
  //     },
  //     commit: false,
  //     createOrder: (data, actions)=> {
  //       return actions.order.create({
  //         purchase_units: [{
  //           amount: {
  //             value: this.paymentAmount
  //           }
  //         }]
  //       });
  //     },
  //     // Finalize the transaction
  //     onApprove: (data, actions)=> {
  //       return actions.order.capture()
  //         .then(function (details) {
  //           // Show a success message to the buyer
  //           alert('Transaction completed by ' + details.payer.name.given_name + '!');
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         })
  //     }
  //   }).render('#paypal-button');
  // }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
