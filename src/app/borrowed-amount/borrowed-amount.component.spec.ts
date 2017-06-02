import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedAmountComponent } from './borrowed-amount.component';

describe('BorrowedAmountComponent', () => {
  let component: BorrowedAmountComponent;
  let fixture: ComponentFixture<BorrowedAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowedAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowedAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
