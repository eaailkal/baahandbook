import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';


// import components from the angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EventListPage } from '../pages/event-list/event-list';
import { ParkMapPage } from '../pages/park-map/park-map';
import { Contact } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

// Firebase credentials
export const firebaseConfig = {
    apiKey: "AIzaSyBRG9caQVVqS2IRv2nS6Z0m6LNiJYUkvFQ",
    authDomain: "handbook-28b6f.firebaseapp.com",
    databaseURL: "https://handbook-28b6f.firebaseio.com",
    projectId: "handbook-28b6f",
    storageBucket: "handbook-28b6f.appspot.com",
    messagingSenderId: "550218362488"
};

@NgModule({
  declarations: [
    MyApp,
    EventListPage,
    ParkMapPage,
    Contact,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

    // Angular fire
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

    // To force a specific tab placement
    // IonicModule.forRoot(MyApp, {tabsPlacement: 'top'} )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventListPage,
    ParkMapPage,
    Contact,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
