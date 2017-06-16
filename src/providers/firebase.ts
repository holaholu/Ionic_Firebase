import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {
  listings:FirebaseListObservable<any[]>;
  listing:FirebaseObjectObservable<any[]>;

  constructor(private af: AngularFire) {

  }

  getListings(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<any[]>
    return this.listings;
  }

  addListing(business){
    return this.listings.push(business);
  }

}
