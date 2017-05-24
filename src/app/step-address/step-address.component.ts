import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation } from '../animations/animations';
import { StepBaseComponent } from 'app/step-base/step-base.component';

@Component({
  selector: 'yuc-step-address',
  templateUrl: './step-address.component.html',
  styleUrls: ['./step-address.component.css'],
  animations: [ slideInDownAnimation ]
})
export class StepAddressComponent extends StepBaseComponent implements OnInit {
  ngOnInit() {
  }

  createForm() {
  }

  getNextRoute(): string {
    return '/end';
  }
  updateApplication() {
    throw new Error("Method not implemented.");
  }
}
