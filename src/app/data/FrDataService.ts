import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { BusinessUnit } from 'environments/business-units';
import { ApiService } from 'app/api/api.service';
import { IDataService } from "app/data/base-data.service";

@Injectable()
export class FrDataService extends IDataService {
  getTitle(): string {
    return 'FR';
  }
}