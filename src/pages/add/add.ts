import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseService} from '../../providers/firebase';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  business:Object;
  constructor(public firebaseService:FirebaseService,public navCtrl: NavController, public navParams: NavParams) {
    this.business = {
      name:'',
      owner:'',
      email:'',
      phone:'',
      city:''
    }
  }

  ionViewWillEnter(){}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  onAddSubmit(){
    this.firebaseService.addListing(this.business);
    this.navCtrl.push(HomePage);
  }

}
