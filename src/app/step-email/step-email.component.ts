import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations/animations';
import { StepBaseComponent } from '../step-base/step-base.component';
import { Validators } from '@angular/forms';


@Component({
  selector: 'yuc-step-email',
  templateUrl: './step-email.component.html',
  styleUrls: ['./step-email.component.css'],
  animations: [slideInDownAnimation]
})
export class StepEmailComponent extends StepBaseComponent implements OnInit {
  formErrors = {
    'email': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Are you kidding me ? This is not an email'
    }
  };


  ngOnInit() {
  }

  createForm() {
    this.stepForm = this.fb.group({
      email: [this.currentApplication.email, [Validators.required,Validators.email]]
    });

    this.stepForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  updateApplication() {
    const formModel = this.stepForm.value;
    this.applicationDataService.saveEmail(formModel.email);
  }

  getNextRoute(): string {
    return '/family';
  }
}
