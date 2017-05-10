import { Observable } from 'rxjs';
import { Event } from './Event';

export interface Events {
  offset: number;
  limit: number;
  total?: number;
  results: Observable<Event>[];
}
