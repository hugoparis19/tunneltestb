import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../animations/animations';
import { StepBaseComponent } from 'app/step-base/step-base.component';

@Component({
  selector: 'yuc-step-family',
  templateUrl: './step-family.component.html',
  styleUrls: ['./step-family.component.css'],
  animations: [ slideInDownAnimation ]
})
export class StepFamilyComponent extends StepBaseComponent implements OnInit {

  ngOnInit() {
  }

  createForm() {
  }

  getNextRoute(): string {
    return '/address';
  }
  updateApplication() {
    throw new Error("Method not implemented.");
  }

}
