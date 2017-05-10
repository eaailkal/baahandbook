import { Component } from '@angular/core';
import { EventListPage } from '../event-list/event-list';
import { ParkMapPage } from '../park-map/park-map';
import { Contact } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})

// The class definition is where we assign each of 
// the tabs to its corresponding components

export class TabsPage {
  tab1Root: any = EventListPage;
  tab2Root: any = ParkMapPage;
  tab3Root: any = Contact;

  constructor() {}
}
