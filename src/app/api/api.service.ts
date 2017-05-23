import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProjectType } from 'app/models/project-type';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getProjectTypes(): Observable<ProjectType[]> {
    return this.http
      .get(`app/projectTypes`)
      .map(response => response.json().data as ProjectType[]);
  }

}
