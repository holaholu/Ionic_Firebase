import { Component } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FirebaseService} from '../../providers/firebase';
import {ListingDetailsPage} from '../listing-details/listing-details';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listings;
  constructor(public af:AngularFire, public firebaseService:FirebaseService, public navCtrl: NavController) {
    this.af.auth.subscribe(auth => {
      if(auth){
        this.firebaseService.getListings().subscribe(listings => {
          this.listings = listings;
          console.log(listings);
        });
      } else {
        console.log('Not logged in');
      }
    });
  }

  login(){
    this.af.auth.login();
  }

  logout(){
    this.af.auth.logout();
  }

  listingSelected(listing){
    this.navCtrl.push(ListingDetailsPage, listing);
  }

}
