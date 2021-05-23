import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListModule} from './pages/list/list.module';
import {MatCardModule} from '@angular/material/card';
import {ConditionCardModule} from './pages/condition/card/condition-card.module';
import {HomeModule} from './pages/home/home.module';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {NavModule} from './pages/nav/nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListModule,
    BrowserAnimationsModule,
    MatCardModule,
    ConditionCardModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
