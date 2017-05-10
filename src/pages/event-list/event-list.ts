import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscription } from "rxjs";
import { Events } from '../../model/Events';
import { EventsService } from '../../providers/events-provider';

@Component({
  selector: 'event-list',
  templateUrl: 'event-list.html'
})
export class EventListPage implements OnInit, OnDestroy {
  events: Events;
  subscription: Subscription;
  
  constructor(public navCtrl: NavController, private eventService: EventsService) {}

  ngOnInit(): void {
    this.subscription = this.eventService.load(0, 10).subscribe(events =>
this.events = events);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
} }