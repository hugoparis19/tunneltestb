import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepAddressComponent } from 'app/step-address/step-address.component';
import { StepLandingComponent } from 'app/step-landing/step-landing.component';
import { StepEmailComponent } from 'app/step-email/step-email.component';
import { StepFamilyComponent } from 'app/step-family/step-family.component';

const routes: Routes = [
  {
    path: 'landing',
    component: StepLandingComponent
  },
  {
    path: 'email',
    component: StepEmailComponent
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
export class AppRoutingModule { }
