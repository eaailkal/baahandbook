import { Component, Input } from '@angular/core';
import { Event } from '../../model/Event';

// import AngularFire and FirebaseListObservable modules 
// from the AngularFire 2 library to provide bindings to Firebase
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'event',
  templateUrl: 'event.html'
})
export class EventComponent {
  @Input() event: Event;
}

