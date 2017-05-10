import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

// load the provider and assign it to ParkData
// import { ParkData } from '../providers/park-data';



@Component({
  templateUrl: 'app.html',
  // providers: [ ParkData ]
})
export class MyApp {
  rootPage = TabsPage;

  // we need to add an array of providers in the @Component declaration
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  // constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public parkData: ParkData) {

    // After the platform.ready code block, we will call the parkData.load() method. 
    // This will trigger the provider to load our datafile

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // parkData.load();
    });
  }

}
