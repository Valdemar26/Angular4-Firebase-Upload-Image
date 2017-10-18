import {Component} from '@angular/core';
import { FirebaseListObservable } from "angularfire2/database/firebase_list_observable";
import { AngularFireDatabase } from "angularfire2/database/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 upload images with Firebase';
  description = 'Angular4-Firebase Demo';
}
