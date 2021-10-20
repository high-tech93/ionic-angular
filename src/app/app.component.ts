import { Component, ViewChild, enableProdMode } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public oneSignal: OneSignal,
    public alert: AlertController,
    ) {
      firebase.initializeApp({
        apiKey: "AIzaSyCXqSp74O42zPKIhS8wUOuiq07TAf85_R0",
        authDomain: "carry-your-cross-ministries.firebaseapp.com",
        databaseURL: "https://carry-your-cross-ministries.firebaseio.com",
        projectId: "carry-your-cross-ministries",
        storageBucket: "carry-your-cross-ministries.appspot.com",
        messagingSenderId: "196047912175",
      });
      this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.splashScreen.hide();

      if(this.platform.is('cordova')) {
        this.setupPush();
        enableProdMode();
      } else {
        // this.showAlert('Warning', 'You are running in browser', "OK");
      }
    });
  }
  setupPush() {
    this.oneSignal.startInit('61209580-2446-4adc-aaef-5825591db62c', '196047912175');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
 
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });
 
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      let additionalData = data.notification.payload.additionalData;
 
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
 
    this.oneSignal.endInit();
  }
  async showAlert(title, msg, task) {
    const alert = await this.alert.create({
      title: title,
      subTitle: msg,
      buttons: [
        {
          text: `${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    })
    alert.present();
  }
}
