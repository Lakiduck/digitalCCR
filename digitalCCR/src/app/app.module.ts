import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { DisplayinfoComponent } from './displayinfo/displayinfo.component';
import { ExtractinfoService } from './extractinfo.service';

import { DatabaseService } from './database.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthStateService } from './auth-state.service';
import { RoutingModule } from './routing/routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayinfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [DatabaseService, AuthStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
