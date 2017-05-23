import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '@angular/material';
import { StepLandingComponent } from './step-landing/step-landing.component';
import { StepEmailComponent } from './step-email/step-email.component';
import { StepFamilyComponent } from './step-family/step-family.component';
import { StepAddressComponent } from './step-address/step-address.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data-service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StepLandingComponent,
    StepEmailComponent,
    StepFamilyComponent,
    StepAddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
