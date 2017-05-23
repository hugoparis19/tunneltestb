import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepLandingComponent } from './step-landing.component';

describe('StepLandingComponent', () => {
  let component: StepLandingComponent;
  let fixture: ComponentFixture<StepLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
