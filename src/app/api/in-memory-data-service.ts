import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {
  } {
    const projectTypes = [
      {id: 0, label: 'choose'},
      {id: 11, label: 'Tresorie'},
      {id: 12, label: 'Véhicule neuf'},
      {id: 13, label: 'Véhicule d\'occasion'},
      {id: 14, label: 'Rac'},
      {id: 15, label: 'Travaux'},
      {id: 16, label: 'Voyages'}
    ];

    const borrowedAmounts = [
      {id: 0, label: 'choose'},
      {id: 11, label: '1 000€'},
      {id: 12, label: '2 000€'},
      {id: 13, label: '3 000€'},
      {id: 14, label: '4 000€'},
      {id: 15, label: '5 000€'},
      {id: 16, label: '6 000€'}
    ];

    const familySituations = [
      {id: 0, label: 'choose'},
      {id: 1, label: 'Célib'},
      {id: 2, label: 'Marié sans enfant'},
      {id: 3, label: 'Marié avec enfants'}
    ];
    return {projectTypes, borrowedAmounts, familySituations};
  }

  constructor() { }

}
