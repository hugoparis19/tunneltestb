import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFamilyComponent } from './step-family.component';

describe('StepFamilyComponent', () => {
  let component: StepFamilyComponent;
  let fixture: ComponentFixture<StepFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
