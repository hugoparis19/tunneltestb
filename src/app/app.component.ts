import { Component } from '@angular/core';
import { ApplicationDataService } from './data/application-data.service';
import { Application } from "app/models/application";

@Component({
  selector: 'yuc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private applicationDataService: ApplicationDataService){
  }

  get formData(): Application{
    return this.applicationDataService.getApplication();
  }
}
