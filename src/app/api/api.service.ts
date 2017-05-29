import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProjectType } from 'app/models/project-type';
import { BorrowedAmount } from 'app/models/borrowed-amount';
import { FamilySituation } from "app/models/family-situation";

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getProjectTypes(): Observable<ProjectType[]> {
    return this.http
      .get(`app/projectTypes`)
      .map(response => response.json().data as ProjectType[]);
  }

  getBorrowedAmounts(): Observable<BorrowedAmount[]> {
    return this.http
      .get(`app/borrowedAmounts`)
      .map(response => response.json().data as BorrowedAmount[]);
  }

  getFamilySituations(): Observable<FamilySituation[]> {
    return this.http
      .get(`app/familySituations`)
      .map(response => response.json().data as FamilySituation[]);
  }

}
