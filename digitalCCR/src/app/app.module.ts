import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { LoginComponent } from './login/login.component';
import { AuthStateService } from './auth-state.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule
  ],
  providers: [AuthStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
