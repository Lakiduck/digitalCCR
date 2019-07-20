import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { DisplayinfoComponent } from './displayinfo/displayinfo.component';
import { ExtractinfoService } from './extractinfo.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayinfoComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule
  ],
  providers: [ExtractinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
