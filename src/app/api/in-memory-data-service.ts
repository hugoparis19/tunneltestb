import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {
  } {
    const projectTypes = [
      {id: 11, name: 'Tresorie'},
      {id: 12, name: 'Véhicule neuf'},
      {id: 13, name: 'Véhicule d\'occasion'},
      {id: 14, name: 'Rac'},
      {id: 15, name: 'Travaux'},
      {id: 16, name: 'Voyages'}
    ];
    return {projectTypes};
  }

  constructor() { }

}
