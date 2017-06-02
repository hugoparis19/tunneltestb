import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Application } from '../models/application';
import { ApplicationDataService } from '../data/application-data.service';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';

// @Component({
//   selector: 'yuc-step-base',
//   templateUrl: './step-base.component.html',
//   styleUrls: ['./step-base.component.css']
// })
export abstract class StepBaseComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';


  stepForm: FormGroup;
  currentApplication: Application;
  nextRoute: string;
  formErrors = {};
  validationMessages = {};

  constructor(
    @Inject(FormBuilder)  protected fb: FormBuilder,
    @Inject(ApplicationDataService) protected applicationDataService: ApplicationDataService,
    @Inject(Router) private router: Router,
    @Inject(ApiService) protected apiService: ApiService,
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

  onValueChanged(data?: any) {
    if (!this.stepForm) { return; }
    const form = this.stepForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
