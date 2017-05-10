import { Component, Input } from '@angular/core';
import { Events } from '../../model/Events';


@Component({
  selector: 'events',
  templateUrl: 'events.html'
})

export class EventsComponent {
  @Input() events: Events;
}