import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepAddressComponent } from 'app/step-address/step-address.component';
import { StepLandingComponent } from 'app/step-landing/step-landing.component';
import { StepFamilyComponent } from 'app/step-family/step-family.component';
import { EsStepEmailComponent } from "app/step-email/es.step-email.component";

const routes: Routes = [
  {
    path: 'landing',
    component: StepLandingComponent
  },
  {
    path: 'email',
    component: EsStepEmailComponent
  },
  {
    path: 'family',
    component: StepFamilyComponent
  },
  {
    path: 'address',
    component: StepAddressComponent
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleEs { }
