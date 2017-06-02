import { Component } from '@angular/core';
import { ApplicationDataService } from './data/application-data.service';
import { Application } from 'app/models/application';
import { environment } from './../environments/environment';
import { IDataService } from './data/base-data.service';

@Component({
  selector: 'yuc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public environmentName: string = environment.envName;

  constructor(private applicationDataService: ApplicationDataService, private dataService: IDataService){
  }

  get formData(): Application{
    return this.applicationDataService.getApplication();
  }

  get Title(): string{
    return this.dataService.getTitle();
  }
}
