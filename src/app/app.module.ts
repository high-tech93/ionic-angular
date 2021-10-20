import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { EventsPage } from '../pages/events/events';
import { VideosPage } from '../pages/videos/videos';
import { ProfilesPage } from '../pages/profiles/profiles'
import { MorePage } from '../pages/more/more'
import { ConferencesPage } from '../pages/conferences/conferences';
import { BiblePage } from '../pages/bible/bible';
import { SeriesPage } from '../pages/series/series';
import { EpisodePage } from '../pages/episode/episode';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { BranchesPage } from '../pages/branches/branches';
import { ConnectPage } from '../pages/connect/connect';
import { LeadersPage } from '../pages/leaders/leaders';
import { LocationMapPage } from '../pages/location-map/location-map';
import { MinistriesPage } from '../pages/ministries/ministries';
import { MinistryDetailsPage } from '../pages/ministry-details/ministry-details';
import { ProfileArticlePage } from '../pages/profile-article/profile-article';
import { SocialPage } from '../pages/social/social';
import { GivingPage } from '../pages/giving/giving';
import { PaymentPage } from '../pages/payment/payment';
import { TabsPage } from '../pages/tabs/tabs';
import { PipesModule } from '../pipes/pipes.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Calendar } from '@ionic-native/calendar';
import { SocialSharing } from '@ionic-native/social-sharing';
// import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PayPal } from '@ionic-native/paypal';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EventsPage,
    VideosPage,
    ProfilesPage,
    MorePage,
    ConferencesPage,
    BiblePage,
    SeriesPage,
    EpisodePage,
    EventDetailsPage,
    AboutPage,
    BranchesPage,
    ConnectPage,
    LeadersPage,
    LocationMapPage,
    MinistriesPage,
    MinistryDetailsPage,
    VideosPage,
    ProfileArticlePage,
    SocialPage,
    GivingPage,
    PaymentPage,
    TabsPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDMgyfWT7Ur55veBZKf-QZyvWEiFh8USGs'
    // }),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    EventsPage,
    VideosPage,
    ProfilesPage,
    MorePage,
    ConferencesPage,
    BiblePage,
    SeriesPage,
    EpisodePage,
    EventDetailsPage,
    AboutPage,
    BranchesPage,
    ConnectPage,
    LeadersPage,
    LocationMapPage,
    MinistriesPage,
    MinistryDetailsPage,
    VideosPage,
    ProfileArticlePage,
    SocialPage,
    GivingPage,
    PaymentPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    InAppBrowser,
    Calendar,
    SocialSharing,
    PayPal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
