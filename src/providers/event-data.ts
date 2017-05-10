import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ParkData {
  data: any = null;

  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

  // load data
  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('assets/data/data.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  
  // add a method on our ParkData service provider to actually return the data that we have loaded
  getParks() {
    return this.load().then(data => {
      return data;
    });
  }

}
