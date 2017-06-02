import { StepLandingComponent } from 'app/step-landing/step-landing.component';
import { slideInDownAnimation } from 'app/animations/animations';
import { Component } from "@angular/core";


@Component({
  selector: 'yuc-step-landing',
  templateUrl: './es.step-landing.component.html',
  styleUrls: ['./step-landing.component.css'],
  providers: [],
  animations: [ slideInDownAnimation ]
})
export class EsStepLandingComponent extends StepLandingComponent {
  getEsInfo(): string {
    return 'Vamos !!';
  }
}