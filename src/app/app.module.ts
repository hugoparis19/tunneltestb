import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepBaseComponent } from './step-base/step-base.component';
import { ApplicationDataService } from 'app/data/application-data.service';
import { ApiService } from 'app/api/api.service';
import { ForbiddenValidatorDirective } from './validators/forbidden-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StepLandingComponent,
    StepEmailComponent,
    StepFamilyComponent,
    StepAddressComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, ApplicationDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

