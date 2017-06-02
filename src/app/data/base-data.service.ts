import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { BusinessUnit } from 'environments/business-units';
import { ApiService } from 'app/api/api.service';


@Injectable()
export abstract class IDataService {
  abstract getTitle(): string;
}
