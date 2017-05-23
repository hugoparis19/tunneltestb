import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepEmailComponent } from './step-email.component';

describe('StepEmailComponent', () => {
  let component: StepEmailComponent;
  let fixture: ComponentFixture<StepEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
