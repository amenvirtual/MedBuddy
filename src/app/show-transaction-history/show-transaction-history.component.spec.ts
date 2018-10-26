import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTransactionHistoryComponent } from './show-transaction-history.component';

describe('ShowTransactionHistoryComponent', () => {
  let component: ShowTransactionHistoryComponent;
  let fixture: ComponentFixture<ShowTransactionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTransactionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
