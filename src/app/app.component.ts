import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = { 
  apiKey: 'AIzaSyAMfyVB4tV_AMoyoNab1Gse4sLTmJHRyCs',
  databaseURL: 'https://angularchat-d9b17-default-rtdb.firebaseio.com'
};  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor(){
    firebase.initializeApp(config);
  }
}