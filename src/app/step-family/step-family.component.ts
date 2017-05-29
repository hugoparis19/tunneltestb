import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../animations/animations';
import { StepBaseComponent } from 'app/step-base/step-base.component';
import { Observable } from 'rxjs/Observable';
import { FamilySituation } from 'app/models/family-situation';
import { Validators, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';
import { forbiddenValueValidator } from 'app/validators/forbidden-validator.directive';
import { numberOfChildrenValidator } from 'app/validators/number-of-children-validator';



@Component({
  selector: 'yuc-step-family',
  templateUrl: './step-family.component.html',
  styleUrls: ['./step-family.component.css'],
  animations: [slideInDownAnimation]
})
export class StepFamilyComponent extends StepBaseComponent implements OnInit {
  familySituations: Observable<FamilySituation[]>;

  ngOnInit() {
    this.familySituations = this.apiService.getFamilySituations();
  }

  createForm() {
    this.stepForm = this.fb.group({
      familySituationId: [this.currentApplication.familySituationId, [Validators.required, forbiddenValueValidator(0)]],
      numberOfChildren: [this.currentApplication.numberOfChildren, [Validators.required]]
    }, {
        validator: numberOfChildrenValidator
      });
  }

  getNextRoute(): string {
    return '/address';
  }
  updateApplication() {
    const formModel = this.stepForm.value;
    this.applicationDataService.saveFamilySituationId(formModel.familySituationId);
    this.applicationDataService.saveNumberOfChildren(formModel.numberOfChildren);
  }

}
