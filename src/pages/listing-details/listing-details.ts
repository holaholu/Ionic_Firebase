import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listing-details',
  templateUrl: 'listing-details.html'
})
export class ListingDetailsPage {
  listing:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidEnter() {
    this.listing = {
      id: this.navParams.get('$key'),
      name: this.navParams.get('name'),
      owner: this.navParams.get('owner'),
      email: this.navParams.get('email'),
      phone: this.navParams.get('phone'),
      city: this.navParams.get('city'),
    }
  }

}
