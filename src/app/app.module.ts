import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ListingDetailsPage } from '../pages/listing-details/listing-details';
import {AddPage} from '../pages/add/add';
import {FirebaseService} from '../providers/firebase';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyA8dy7jSFbM_fRlubde3ehFdup7EQwe7Eg",
    authDomain: "mobilebiz-8a646.firebaseapp.com",
    databaseURL: "https://mobilebiz-8a646.firebaseio.com",
    projectId: "mobilebiz-8a646",
    storageBucket: "mobilebiz-8a646.appspot.com",
    messagingSenderId: "782576447461"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListingDetailsPage,
    AddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListingDetailsPage,
    AddPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},FirebaseService]
})
export class AppModule {}
