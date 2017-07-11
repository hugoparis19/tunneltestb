import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations/animations';
import { StepBaseComponent } from '../step-base/step-base.component';
import { Validators } from '@angular/forms';
import { StepEmailComponent } from 'app/step-email/step-email.component';


@Component({
  selector: 'yuc-step-email-es',
  templateUrl: './es.step-email.component.html',
  styleUrls: ['./step-email.component.css'],
  animations: [slideInDownAnimation]
})
export class EsStepEmailComponent extends StepEmailComponent  {
  debugger;
}
