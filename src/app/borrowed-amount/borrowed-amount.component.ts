import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BorrowedAmount } from '../models/borrowed-amount';
import { ApiService } from '../api/api.service';
import { Application } from '../models/application';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ApplicationDataService } from '../data/application-data.service';
import { forbiddenValueValidator } from '../validators/forbidden-validator.directive';


@Component({
  selector: 'yuc-borrowed-amount',
  templateUrl: './borrowed-amount.component.html',
  styleUrls: ['./borrowed-amount.component.css']
})
export class BorrowedAmountComponent implements OnInit {
  currentApplication: Application;
  @Input('group') currentFormGroup: FormGroup;

  borrowedAmounts: Observable<BorrowedAmount[]>;
  constructor(protected apiService: ApiService, protected applicationDataService: ApplicationDataService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.currentApplication = this.applicationDataService.getApplication();
    this.borrowedAmounts = this.apiService.getBorrowedAmounts();
    this.createForm();
  }

  get arrayComponents(): FormArray {
    return this.currentFormGroup.get('components') as FormArray;
  };

  createForm() {
    this.arrayComponents.push(
      this.fb.group(
        { borrowedAmountId: [this.currentApplication.borrowedAmountId, [Validators.required, forbiddenValueValidator(0)]] }
      ));
  }

}
