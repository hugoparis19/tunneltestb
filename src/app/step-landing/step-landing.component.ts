import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import { ProjectType } from 'app/models/project-type';

@Component({
  selector: 'yuc-step-landing',
  templateUrl: './step-landing.component.html',
  styleUrls: ['./step-landing.component.css'],
  providers: [ApiService]
})
export class StepLandingComponent implements OnInit {
  projectTypes: Observable<ProjectType[]>;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.projectTypes = this.apiService.getProjectTypes();
  }

}
