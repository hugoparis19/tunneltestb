import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Application } from '../models/application';
import { ApplicationDataService } from '../data/application-data.service';
import { Router } from '@angular/router';
import { ApiService } from 'app/api/api.service';

@Component({
  selector: 'yuc-step-base',
  templateUrl: './step-base.component.html'
})
export abstract class StepBaseComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  stepForm: FormGroup;
  currentApplication: Application;
  nextRoute: string;

  constructor(
    protected fb: FormBuilder,
    protected applicationDataService: ApplicationDataService,
    private router: Router,
    protected apiService: ApiService,
  ) {
    this.currentApplication = this.applicationDataService.getApplication();
    this.createForm();
  }


 onSubmit() {
    this.updateApplication();
    this.router.navigate([this.getNextRoute()]);
  }

  abstract getNextRoute(): string;
  abstract createForm();
  abstract updateApplication(); 
}
