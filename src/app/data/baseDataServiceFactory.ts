import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { BusinessUnit } from 'environments/business-units';
import { ApiService } from 'app/api/api.service';
import { EsDataService } from "app/data/EsDataService";
import { FrDataService } from "app/data/FrDataService";
import { XHRBackend } from '@angular/http';


export function baseDataServiceFactory(backend: XHRBackend) {
    if (environment.businessUnit === BusinessUnit.Es) {
      return new EsDataService();
    }
    return new FrDataService();
}