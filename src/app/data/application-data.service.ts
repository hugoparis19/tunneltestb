import { Injectable } from '@angular/core';
import { Application } from 'app/models/application';

@Injectable()
export class ApplicationDataService {
  private application: Application = new Application();
  constructor() {
    this.application = new Application();
   }

  saveProjectTypeId(projectTypeId: number) {
    this.application.projectTypeId = projectTypeId;
  }

  saveBorrowedAmountId(borrowedAmountId: number) {
    this.application.borrowedAmountId = borrowedAmountId;
  }

  saveEmail(email: string) {
    this.application.email = email;
  }

  saveFamilySituationId(familySituationId: number) {
    this.application.familySituationId = familySituationId;
  }

  saveNumberOfChildren(numberOfChildren: number) {
    this.application.numberOfChildren = numberOfChildren;
  }

  getApplication(): Application {
    return this.application;
  }
}
