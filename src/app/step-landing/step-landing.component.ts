import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import { ProjectType } from 'app/models/project-type';
import { slideInDownAnimation } from '../animations/animations';
import { StepBaseComponent } from 'app/step-base/step-base.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrowedAmount } from 'app/models/borrowed-amount';
import { Application } from 'app/models/application';
import { ApplicationDataService } from '../data/application-data.service';
import { forbiddenValueValidator } from 'app/validators/forbidden-validator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'yuc-step-landing',
  templateUrl: './step-landing.component.html',
  styleUrls: ['./step-landing.component.css'],
  providers: [],
  animations: [ slideInDownAnimation ]
})
export class StepLandingComponent extends StepBaseComponent implements OnInit {
  projectTypes: Observable<ProjectType[]>;
  borrowedAmounts: Observable<BorrowedAmount[]>;

  ngOnInit() {
    this.borrowedAmounts = this.apiService.getBorrowedAmounts();
    this.projectTypes = this.apiService.getProjectTypes();
  }

  createForm() {
    this.stepForm = this.fb.group({
      projectTypeId: [this.currentApplication.projectTypeId, [Validators.required, forbiddenValueValidator(0)]],
      borrowedAmountId: [this.currentApplication.borrowedAmountId, [Validators.required, forbiddenValueValidator(0)]]
    });
  }

  updateApplication() {
    const formModel = this.stepForm.value;
    this.applicationDataService.saveProjectTypeId(formModel.projectTypeId as number);
    this.applicationDataService.saveBorrowedAmountId(formModel.borrowedAmountId as number);
  }

  getNextRoute(): string {
    return '/email';
  }
}
