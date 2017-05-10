/*

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';
// import { AngularFire } from 'angularfire2';

// import AngularFire and FirebaseListObservable modules 
// from the AngularFire 2 library to provide bindings to Firebase
import { AngularFireDatabase } from 'angularfire2/database';

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Events } from '../model/Events';

@Injectable()
export class EventsService {
constructor(public db: AngularFireDatabase) {}
  load(offset: number = 0, limit: number = 10): Observable<Events> {
    return this.db.list('/events')
      .map(ids => ids.slice(offset, offset + limit))
      .mergeMap((ids: any[]) => Observable.combineLatest(...(ids.map(id =>
this.db.object('/' + id.$value)))))
      .map(events => ({
        offset,
        limit,
        total: limit,
        results: events,
})); }
}

*/



import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as isEqual from 'lodash.isequal';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
// import { AngularFire } from 'angularfire2';

import { AngularFireDatabase } from 'angularfire2/database';
import { Events } from '../model/Events';

@Injectable()
export class EventsService {
  constructor(private db: AngularFireDatabase) {
  }
  load(offset: number = 0, limit: number = 10): Observable<Events> {
    return this.db.list('/events')
      .map(ids => ids.slice(offset, offset + limit).map(v => v.$value))
      .distinctUntilChanged(isEqual)
      .map((ids: any[]) => ids.map(id => this.db.object('/'
+ id)))
      .map(events => ({
        offset,
        limit,
        total: limit,
        results: events,
})); }
}





/*

export class ItemService {
    tasks: FirebaseListObservable<any[]>;
    
    // pass a reference to the AngularFire library as a parameter in our constructor
    constructor(public db: AngularFireDatabase) {
    
    // AngularFire request to return the data in the tasks sub-directory
    this.tasks = db.list('/events');
    }
}

*/