import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { AppRoutingModuleEs } from './es.app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule, MdSidenavModule } from '@angular/material';
import { StepLandingComponent } from './step-landing/step-landing.component';
import { EsStepEmailComponent } from './step-email/es.step-email.component';
import { StepBaseComponent } from './step-base/step-base.component';
import { StepFamilyComponent } from './step-family/step-family.component';
import { StepAddressComponent } from './step-address/step-address.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationDataService } from 'app/data/application-data.service';
import { ApiService } from 'app/api/api.service';
import { ForbiddenValidatorDirective } from './validators/forbidden-validator.directive';
import { IDataService } from 'app/data/base-data.service';
import { InjectionToken } from '@angular/core';
import { EsStepLandingComponent } from 'app/step-landing/es.step-landing.component';
import { BorrowedAmountComponent } from './borrowed-amount/borrowed-amount.component';
import { environment } from './../environments/environment';
import { BusinessUnit } from 'environments/business-units';
import { EsDataService } from 'app/data/EsDataService';
import { FrDataService } from 'app/data/FrDataService';
import { baseDataServiceFactory } from 'app/data/baseDataServiceFactory';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StepLandingComponent,
    EsStepLandingComponent,
    EsStepEmailComponent,
    StepFamilyComponent,
    StepAddressComponent,
    ForbiddenValidatorDirective,
    BorrowedAmountComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule,
    AppRoutingModuleEs,
    BrowserAnimationsModule,
    MdSidenavModule
  ],
  providers: [
    ApiService,
    ApplicationDataService,
    //{ provide: IDataService,    useFactory:  baseDataServiceFactory()}
     { provide: IDataService,    useFactory:  baseDataServiceFactory, deps: [ XHRBackend ]}
  ],
  bootstrap: [AppComponent]
})
export class AppModuleEs { }

