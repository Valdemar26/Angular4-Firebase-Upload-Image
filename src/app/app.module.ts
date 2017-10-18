import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {FormUploadComponent} from './upload/form-upload/form-upload.component';
import {UploadFileService} from './upload/upload-file.service';

import {environment} from '../environments/environment';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule // for database
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
